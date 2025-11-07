import { NextResponse } from "next/server";

const GITHUB_API_URL = "https://api.github.com/graphql";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

interface GraphQLResponse {
  data: {
    viewer: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
        };
      };
      repositories: {
        totalCount: number;
        nodes: {
          stargazerCount: number;
        }[];
      };
      createdAt: string;
    };
  };
}

export async function GET() {
  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GitHub token is not configured" },
      { status: 500 }
    );
  }

  const to = new Date();
  const from = new Date(to);
  from.setDate(to.getDate() - 365);

  const query = `
    query($from: DateTime!, $to: DateTime!) {
      viewer {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
          }
        }
        repositories(
          ownerAffiliations: OWNER
          privacy: PUBLIC
          first: 100
          orderBy: { field: STARGAZERS, direction: DESC }
        ) {
          totalCount
          nodes {
            stargazerCount
          }
        }
      }
    }
  `;

  const variables = {
    from: from.toISOString(),
    to: to.toISOString(),
  };

  try {
    const response = await fetch(GITHUB_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("GitHub API response error:", errorText);
      return NextResponse.json(
        { error: `GitHub API request failed: ${response.statusText}` },
        { status: response.status }
      );
    }

    const result = (await response.json()) as GraphQLResponse;
    const totalContributions =
      result.data.viewer.contributionsCollection.contributionCalendar
        .totalContributions;
    const publicRepositories = result.data.viewer.repositories.totalCount;
    const totalStars = result.data.viewer.repositories.nodes.reduce(
      (acc, repo) => acc + repo.stargazerCount,
      0
    );

    return NextResponse.json({
      totalContributions,
      publicRepositories,
      totalStars,
    });
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
}

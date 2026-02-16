import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    // 1. Validate the request came from Sanity (Security)
    // We will set this secret in the environment variables later
    const { isValidSignature, body } = await parseBody(
      req, 
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    // 2. Trigger the Revalidation
    // This purges the cache for any data fetched with the 'content' tag
    revalidateTag("content", "thing");

    console.log(`Revalidated content triggered by ${body?._type}`);
    
    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (err: any) {
    console.error(err);
    return new Response(err.message, { status: 500 });
  }
}
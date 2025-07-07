import { submissions } from "@/lib/data";
import SubmissionDetails from "@/components/submission-details";
import { Header } from "@/components/header";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// This forces the page to be dynamically rendered
export const dynamic = "force-dynamic";

export default function PodcastDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const submission = submissions.find((s) => s.id === params.id);

  if (!submission) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4 md:p-8 container mx-auto">
        <div className="mb-6">
          <Button asChild variant="outline" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Submissions
            </Link>
          </Button>
        </div>
        <SubmissionDetails initialSubmission={submission} />
      </main>
    </div>
  );
}

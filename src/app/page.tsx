import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

export default function Dashboard() {


  return (
    <MaxWidthWrapper>
      <main>
        <Card>
          <CardHeader>
            <CardTitle>Portfolio</CardTitle>
            <CardDescription>Current value of your holdings</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Portfolio Content</p>
          </CardContent>
        </Card>
      </main>
    </MaxWidthWrapper>
  );
}

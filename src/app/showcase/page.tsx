import { Page } from "@/app/components/Page";

import { PlansSection } from "./components/PlansSection";
import { RecipesSection } from "./components/RecipesSection";

export default function ShowcasePage() {
  return (
    <Page>
      <PlansSection />
      <RecipesSection />
    </Page>
  );
}
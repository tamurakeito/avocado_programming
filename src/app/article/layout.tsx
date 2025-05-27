import { DartPadProvider } from "@/providers/dartpad-provider";
import { ArticleTemplate } from "@/ui/templates/article";

const ArticleLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DartPadProvider>
      <ArticleTemplate>{children}</ArticleTemplate>
    </DartPadProvider>
  );
};

export default ArticleLayout;

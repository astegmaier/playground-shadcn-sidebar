import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { BigList } from "./BigList";

export const App = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="p-3 bg-green-300 overflow-auto max-h-full">
          <SidebarTrigger />
          <BigList expanded />
        </div>
      </main>
    </SidebarProvider>
  );
};

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { BigList } from "./BigList";

// This lays out the sidebar to the left of the top bar and the main content.
export const App = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col flex-grow">
        <div className="p-3 bg-blue-300">17Reviews</div>
        <main className="p-3 bg-green-300 ">
          <SidebarTrigger />
          <BigList expanded />
        </main>
      </div>
    </SidebarProvider>
  );
};

// This lays out the sidebar with an inset
export const AppWithInset = () => {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <div className="flex flex-col flex-grow">
          <div className="p-3 bg-blue-300">17Reviews</div>
          <main className="p-3 bg-green-300 ">
            <SidebarTrigger />
            <BigList expanded />
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

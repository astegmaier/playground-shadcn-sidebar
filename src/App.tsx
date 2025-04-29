import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { BigList } from "./BigList";

export const App = () => {
  return (
    // TODO: test this on mobile - is dvh and dvw correct? or should we use h-screen/w-screen (which use vh/vw)
    <div className="grid grid-cols-[1fr] grid-rows-[auto_1fr] h-dvh w-dvw overflow-hidden">
      <div className="p-3 bg-blue-300">17Reviews</div>
      <div className="bg-yellow-100 overflow-auto">
        <SidebarProvider className="relative h-full min-h-auto">
          <AppSidebar className="absolute h-full" />
          <main className="p-3 bg-green-300 w-full overflow-y-auto">
            <SidebarTrigger />
            <BigList expanded />
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
};

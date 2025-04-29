import {
  SidebarProvider,
  SidebarTrigger,
  SidebarWrapper,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { BigList } from "./BigList";
import { useIsMobile } from "./hooks/use-mobile";

export function App() {
  return (
    // TODO: test this on mobile - is dvh and dvw correct? or should we use h-screen/w-screen (which use vh/vw)
    <SidebarProvider>
      <div className="grid grid-cols-[1fr] grid-rows-[auto_1fr] h-dvh w-dvw overflow-hidden">
        <TopBar />
        <div className="bg-yellow-100 overflow-auto">
          <SidebarWrapper className="relative h-full min-h-auto">
            <AppSidebar className="absolute h-full" />
            <main className="p-3 bg-green-300 w-full overflow-y-auto">
              <BigList expanded />
            </main>
          </SidebarWrapper>
        </div>
      </div>
    </SidebarProvider>
  );
}

function TopBar() {
  const isMobile = useIsMobile();
  return (
    <div className="p-3 text-lg bg-blue-300">
      AppName {isMobile ? <SidebarTrigger /> : null}
    </div>
  );
}

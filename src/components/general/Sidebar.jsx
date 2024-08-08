import { itemSidebar } from "../../lib/helpers";
import NavLinkItem from "./NavLinkItem";

const Sidebar = () => {
  return (
    <aside className="group flex flex-col fixed w-full sm:w-20 sm:hover:w-32 sm:justify-around sm:h-screen sm:p-4 text-center overflow-hidden transition-all bg-slate-100 bottom-0 sm:bottom-auto z-40">
      <div className="flex sm:flex-col h-full justify-between sm:justify-center mt-4 overflow-hidden sm:gap-2">
        {itemSidebar.map((item, idx) => (
          <div key={idx} className="md:mt-3">
            <NavLinkItem title={item.name} icon={item.icon} href={item.link} />
          </div>
        ))}
      </div>
      <div className="hidden sm:block">
        <NavLinkItem
          title="Sign Out"
          href={"/login"}
          icon={"bi bi-box-arrow-left"}
        />
      </div>
    </aside>
  );
};

export default Sidebar;

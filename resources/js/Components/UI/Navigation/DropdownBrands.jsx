import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { faAngleDown, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function DropdownBrands() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="text-white hover:bg-sky-600 hover:rounded-lg px-3 py-2 text-sm font-medium">
          Marche <FontAwesomeIcon icon={faAngleDown} />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-primary shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-primary data-[focus]:text-white"
            >
              
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}


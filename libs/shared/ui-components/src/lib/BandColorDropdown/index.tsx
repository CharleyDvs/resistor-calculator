import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { DropdownMenuListItem, DropdownMenuTrigger, DropdownMenuList} from './components';

export const BandColorDropdown = (props: Partial<DropdownMenu.DropdownMenuProps>) => {
  return <DropdownMenu.Root {...props} />;
};

BandColorDropdown.List = DropdownMenuList;
BandColorDropdown.ListItem = DropdownMenuListItem;
BandColorDropdown.Trigger = DropdownMenuTrigger;

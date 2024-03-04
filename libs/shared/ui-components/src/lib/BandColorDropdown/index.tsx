import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { ListItem, Trigger, List} from './components';

export const BandColorDropdown = (props: Partial<DropdownMenu.DropdownMenuProps>) => {
  return <DropdownMenu.Root {...props} />;
};

BandColorDropdown.List = List;
BandColorDropdown.ListItem = ListItem;
BandColorDropdown.Trigger = Trigger;

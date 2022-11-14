import { styled } from '@mui/material';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import DevicesIcon from '@mui/icons-material/Devices';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AdbIcon from '@mui/icons-material/Adb';

const cardIconBaseStyles = `
  font-size: 6rem;
  color: var(--mainOrange);
`;

export const StyledMarkAsUnreadIcon = styled(MarkAsUnreadIcon)`
  ${cardIconBaseStyles}
`;

export const StyledManageSearchIcon = styled(ManageSearchIcon)`
  ${cardIconBaseStyles}
`;

export const StyledDevicesIcon = styled(DevicesIcon)`
  ${cardIconBaseStyles}
`;

export const StyledSmartphoneIcon = styled(SmartphoneIcon)`
  ${cardIconBaseStyles}
`;

export const StyledThumbUpIcon = styled(ThumbUpIcon)`
  ${cardIconBaseStyles}
`;

export const StyledAdbIcon = styled(AdbIcon)`
  ${cardIconBaseStyles}
`;

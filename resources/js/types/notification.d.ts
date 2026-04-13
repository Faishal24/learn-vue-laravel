type NotificationType = 'message' | 'system' | 'invite';

type BaseNotification = {
  id: number;
  type: NotificationType;
  time: string;
  read: boolean;
};

type MessageNotification = BaseNotification & {
  type: 'message';
  sender: string;
  avatar: string;
  initials: string;
  preview: string;
};

type SystemNotification = BaseNotification & {
  type: 'system';
  title: string;
  description: string;
};

type InviteNotification = BaseNotification & {
  type: 'invite';
  sender: string;
  avatar: string;
  initials: string;
  groupName: string;
};

type AppNotification = MessageNotification | SystemNotification | InviteNotification;

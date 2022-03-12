export const icons = {
  lock: "ant-design:lock-outlined",
  eye: "ant-design:eye-outlined",
  email: "clarity:email-line",
  search: "ant-design:search-outlined",
  right: "bi:arrow-right",
  close: "ei:close",
  down: "akar-icons:chevron-down",
  up: "akar-icons:chevron-up",
};

export type IconTypes = keyof typeof icons;

const defaultIcon = "fluent:glance-default-12-regular";

export const icon = (type?: IconTypes): string => {
  if (!type) return defaultIcon;
  return icons[type];
};

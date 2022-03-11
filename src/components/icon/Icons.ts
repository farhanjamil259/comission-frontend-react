export const icons = {
  lock: "ant-design:lock-outlined",
  eye: "ant-design:eye-outlined",
  email: "clarity:email-line",
  search: "ant-design:search-outlined",
  right: "bi:arrow-right",
};

export type IconTypes = keyof typeof icons;

const defaultIcon = "fluent:glance-default-12-regular";

export const icon = (type?: IconTypes): string => {
  if (!type) return defaultIcon;
  return icons[type];
};

export const icons = {
  lock: "ant-design:lock-outlined",
  eye: "ant-design:eye-outlined",
  email: "clarity:email-line",
  search: "ant-design:search-outlined",
  right: "bi:arrow-right",
  close: "ei:close",
  down: "akar-icons:chevron-down",
  up: "akar-icons:chevron-up",
  tick: "akar-icons:circle-check-fill",
  tick2: "bi:check",
  tick3: "charm:tick",
  dollar: "mdi:currency-usd",
  calender: "mdi:calendar-blank",
  percent: "mdi:percent-outline",
  left: "bi:arrow-left",
  setting: "ci:settings",
  user: "fa-regular:user",
  add: "carbon:add-filled",
};

export type IconTypes = keyof typeof icons;

const defaultIcon = "fluent:glance-default-12-regular";

export const icon = (type?: IconTypes): string => {
  if (!type) return defaultIcon;
  return icons[type];
};

const variants = {
  default: {
    iconBg: "#232323",
    iconSrc: "/icons/resource-center.svg",
    textColor: "#232323",
  },
  light: {
    iconBg: "#8EFF0A",
    iconSrc: "/icons/resource-dark.svg",
    textColor: "#FFFFFF",
  },
};

export default function IconBadge({
  src,
  alt = "",
  size = "w-[13px] h-[16px]",
  text,
  variant = "default",
}) {
  const v = variants[variant] ?? variants.default;
  const resolvedSrc = src ?? v.iconSrc;

  return (
    <div className="flex items-center gap-3">
      <div
        className="w-[30px] h-[30px] rounded-full p-[6.15px] flex items-center justify-center"
        style={{ backgroundColor: v.iconBg }}
      >
        <img src={resolvedSrc} alt={alt} className={size} />
      </div>
      {text && (
        <span
          className="text-[20px] font-semibold"
          style={{ color: v.textColor }}
        >
          {text}
        </span>
      )}
    </div>
  );
}

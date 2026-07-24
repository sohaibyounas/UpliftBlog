export default function IconBadge({
  src = "/icons/resource-center.svg",
  alt = "",
  size = "w-[13px] h-[16px]",
  text,
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-[30px] h-[30px] rounded-full bg-[#232323] p-[6.15px] flex items-center justify-center">
        <img src={src} alt={alt} className={size} />
      </div>
      {text && (
        <span className="text-[20px] font-semibold text-[#232323]">{text}</span>
      )}
    </div>
  );
}

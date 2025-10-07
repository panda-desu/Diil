export default function ChatInfo({ currentChat }) {
  if (!currentChat) return null;

  return (
    <div className="lg:w-[21vw] w-full lg:border-l lg:border-t border-[#CAD5E2] py-5 px-4 overflow-y-scroll h-full lg:bg-[#fff] bg-[#F1F5F9] lg:pt-4 md:pt-16 pt-14">
      <div className="lgmb-6 mb-4 lg:bg-transparent bg-[#fff] lg:p-0 p-4 lg:rounded-none rounded-[16px]">
        <p className="text-xs text-[#62748E] mb-4">Ажлын газрын мэдээлэл</p>
        <div className="space-y-4 w-full">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-[#CAD5E2] flex items-center justify-center">
              <img src="/icon/chat/salary.svg" alt="icon" />
            </div>
            <div>
              <p className="text-[#020618] font-bold">
                {Number(currentChat.salary).toLocaleString()}₮
              </p>
              <p className="text-[#62748E] text-xs">Цалин</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-[#CAD5E2] flex items-center justify-center">
              <img src="/icon/chat/time.svg" alt="icon" />
            </div>
            <div>
              <p className="text-[#020618] font-bold">{currentChat.workHour}</p>
              <p className="text-[#62748E] text-xs">Ажиллах цаг</p>
            </div>
          </div>
          {currentChat.isInsured && (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#CAD5E2] flex items-center justify-center">
                <img src="/icon/chat/insurance.svg" alt="icon" />
              </div>
              <div>
                <p className="text-[#020618] font-bold">Даатгалтай</p>
                <p className="text-[#62748E] text-xs">Нэмэлтээр</p>
              </div>
            </div>
          )}
          {currentChat.additionally.length !== 0 &&
            currentChat.additionally.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-[#CAD5E2] flex items-center justify-center">
                  <img src="/icon/chat/additional.svg" alt="icon" />
                </div>
                <div>
                  <p className="text-[#020618] font-bold">{item}</p>
                  <p className="text-[#62748E] text-xs">Нэмэлтээр</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="lgmb-6 mb-4 lg:bg-transparent bg-[#fff] lg:p-0 p-4 lg:rounded-none rounded-[16px]">
        <p className="text-xs text-[#62748E] mb-4">Тавигдах шаардлага</p>
        <p className="text-[#020618] text-sm">{currentChat.requirements}</p>
      </div>
      <div className="lgmb-6 mb-4 lg:bg-transparent bg-[#fff] lg:p-0 p-4 lg:rounded-none rounded-[16px]">
        <p className="text-xs text-[#62748E] mb-4">Холбогдох мэдээлэл</p>
        <div className="space-y-4 w-full">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-[#CAD5E2] flex items-center justify-center">
              <img src="/icon/chat/phone.svg" alt="icon" />
            </div>
            <div>
              <p className="text-[#020618] font-bold">{currentChat.phone}</p>
              <p className="text-[#62748E] text-xs">Утас</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-[#CAD5E2] flex items-center justify-center">
              <img src="/icon/chat/phone.svg" alt="icon" />
            </div>
            <div>
              <p className="text-[#020618] font-bold">{currentChat.mail}</p>
              <p className="text-[#62748E] text-xs">Мейл</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-[#CAD5E2] flex items-center justify-center">
              <img src="/icon/chat/phone.svg" alt="icon" />
            </div>
            <div>
              <p className="text-[#020618] font-bold">{currentChat.location}</p>
              <p className="text-[#62748E] text-xs">Байршил</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

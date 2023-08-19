import Accordion from "../components/Accordion"

export default function ThirdPage() {
    const accordionItems = [
        {
          title: 'Social Media Strategy',
          content: [
            'In-depth audience analysis',
            'Goal setting and KPI tracking',
            'Competitive benchmarking',
            'Platform and channel recommendations',
            'Integrated strategy across paid, owned, earned media',
          ],
        },
        {
          title: 'Accordion Item 2',
          content: 'Content for Item 2',
        },
        {
          title: 'Accordion Item 3',
          content: 'Content for Item 3',
        },
      ];
  return (
    <div className="flex items-center justify-center secondpage-text bg-black text-white h-[620px]">
      <div className="flex h-[90%]">
          <div className="flex w-[30%] p-5 h-full items-start text-3xl justify-end">
            what we do
          </div>
          <div className="w-[70%] flex items-start h-full ">
            <Accordion items={accordionItems} />
          </div>
      </div>
    </div>
  )
}

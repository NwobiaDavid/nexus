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
          title: 'Content Creation',
          content: [
            'Attention-grabbing captions',
            'Interactive polls and stories',
            'Engaging social & blog content',
           ],
        },
        {
          title: 'Influencer Marketing',
          content: [
            'Identify relevant creators',
            'Manage collaborations & partnerships',
            'Product seeding & reviews',
            'Sponsorships & affiliate programs'
           ],
        },
        {
            title: 'Advertising',
            content: [
              'Paid campaign management',
              'Budget allocation strategies',
              'Tracking and optimization'
             ],
          },
        {
            title: 'Analytics & Reporting',
            content: [
              'Growth and engagement metrics',
              'Actionable recommendations',
              ],
          },
      ];
  return (
    <div className="flex lg:flex-row flex-col items-center py-24 justify-center secondpage-text dark:bg-gray-300 dark:text-gray-900 bg-black text-white">
      <div className="flex">
          <div className="flex lg:w-[30%] w-full p-5 mr-3 h-full items-start text-lg lg:text-3xl justify-end">
            what we do
          </div>
          <div className="lg:w-[70%] w-full flex items-start h-full ">
            <Accordion items={accordionItems} />
          </div>
      </div>
    </div>
  )
}

import Card from "./Card"

const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 my-20">
      <Card vector="v1" image="i1" text="Social Media Management"/>
      <Card vector="v2" image="i2" text="SEO & SEM"/>
      <Card vector="v3" image="i3" text="Email & Whatsapp Marketing"/>
      <Card vector="v3" image="i3" text="Web Development & UIUX"/>
      <Card vector="v2" image="i2" text="Conversion Rate Optimisation"/>
      <Card vector="v1" image="i1" text="E Commerce Development"/>
      <Card vector="v1" image="i1" text="Influencer Marketing"/>
      <Card vector="v2" image="i2" text="Content Marketing"/>
      <Card vector="v3" image="i3" text="PR & Online Reputation Management"/>
      <Card vector="v1" image="i1" text="Brand Guidelines"/>
      <Card vector="v2" image="i2" text="Logo Design"/>
      <Card vector="v3" image="i3" text="Motion design & Video Editing"/>
    </div>
  )
}

export default CardContainer

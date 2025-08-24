import { Section, Row, Column, Img, Link } from "@react-email/components";

export default function ContactEmailHeader() {
  return (
    <div>    
        <Section className="px-[32px] py-[40px]">
            <Row>
                <Column className="w-[80%]">
                <Img
                    alt="React Email logo"
                    height="42"
                    src="@"
                />
                </Column>
                <Column align="right">
                <Row align="right">
                    <Column>
                    <Link href="#">
                        <Img
                        alt="X"
                        className="mx-[4px]"
                        height="36"
                        src="https://react.email/static/linkedin-logo.png"
                        width="36"
                        />
                    </Link>
                    </Column>
                    <Column>
                    <Link href="#">
                        <Img
                        alt="Instagram"
                        className="mx-[4px]"
                        height="36"
                        src="https://react.email/static/instagram-logo.png"
                        width="36"
                        />
                    </Link>
                    </Column>
                    <Column>
                    <Link href="#">
                        <Img
                        alt="Facebook"
                        className="mx-[4px]"
                        height="36"
                        src="https://react.email/static/facebook-logo.png"
                        width="36"
                        />
                    </Link>
                    </Column>
                </Row>
                </Column>
            </Row>
        </Section>  
    </div>
  )
}
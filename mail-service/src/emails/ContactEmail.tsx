import {
  Html, Head, Preview, Body, Container, Section, Text, Hr
} from "@react-email/components";
import React from "react";
import { Row, Column, Img, Link } from "@react-email/components";
import { MailIcon, PhoneIcon } from "./ContactComponents/icons/Icons.tsx";

export default function ContactEmail({ nombre, telefono, email, mensaje }) {
  return (
    <Html lang="es">
      <Head />
      <Preview>Nueva consulta — L&O Administración</Preview>
      <Body style={main}>
        <Container style={container}>
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
                          <Link href="https://www.linkedin.com/company/tu-empresa">
                            <MailIcon
                              alt="LinkedIn"
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
          <Section>
            <Text><strong>Nombre:</strong> {nombre}</Text>
            {telefono && <Text><strong>Teléfono:</strong> {telefono}</Text>}
            <Text><strong>Email:</strong> {email}</Text>
            <Hr style={hr} />
            <Text style={{ whiteSpace: "pre-wrap" }}>
              <strong>Mensaje:</strong><br />{mensaje}
            </Text>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>Enviado desde el formulario del sitio.</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = { backgroundColor: "#f6f9fc", fontFamily: "Arial, sans-serif" };
const container = { margin: "0 auto", backgroundColor: "#ffffff", padding: "24px", maxWidth: "560px" };
const heading = { margin: "0 0 12px", fontSize: "20px" };
const hr = { borderTop: "1px solid #eaeaea", margin: "16px 0" };
const footer = { color: "#667", fontSize: "12px" };

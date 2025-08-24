import {
  Html, Head, Preview, Body, Container, Section, Text, Hr
} from "@react-email/components";
import React from "react";
import { Row, Column, Img, Link } from "@react-email/components";

export default function ContactEmail({ nombre, telefono, email, mensaje }) {
  return (
    <Html lang="es">
      <Head />
      <Preview>Nueva consulta — L&O Administración</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section className="my-[40px] px-[32px] py-[40px]">
            <Row>
              <Column align="center">
                <Img
                    alt="React Email logo"
                    height="42"
                    src="https://raw.githubusercontent.com/FMachado8599/L-O-Administracion/refs/heads/main/src/assets/media/logo/l-o-admin_logo_light.webp"
                />
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

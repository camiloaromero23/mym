const logoSource = "/inmobiliaria-mm-logo.jpg";

export function BrandLogo(props: { class?: string }) {
  return (
    <img
      class={props.class}
      src={logoSource}
      width="906"
      height="324"
      alt="Organización Inmobiliaria M&M LTDA"
    />
  );
}

import { useNavigate } from "react-router-dom";

export default function Root() {

  const navigate = useNavigate();
  const onStartPress = () => {
    navigate("/enigme/1");
  }

  return (
    <div style={{paddingBottom: 48, paddingLeft: 24, paddingRight: 24, overflow: "scroll", width: "100%"}}>
      <h1>L&apos;enquête d&apos;Angélique</h1>
      <p>Je suis Ang&eacute;lique du Coudray, ma&icirc;tresse des accouchements et gardienne de ces lieux. Depuis des si&egrave;cles, je veille sur cette maternit&eacute;, o&ugrave; tant de vies ont vu le jour. Mais aujourd&apos;hui, une force obscure s&apos;est empar&eacute;e de l&apos;h&ocirc;pital. Dans les recoins les plus sombres de ce b&acirc;timent, une pr&eacute;sence terrifiante s&rsquo;est &eacute;veill&eacute;e&#8230; un monstre qui enl&egrave;ve nos sages-femmes, les emportant loin de nous.<br /></p>
      <p>Je ressens sa pr&eacute;sence grandir dans l&apos;ombre, mais je suis impuissante &agrave; l&apos;arr&ecirc;ter seule. C&apos;est pourquoi j&apos;ai besoin de vous, enqu&ecirc;teurs courageux. Vous devrez m&apos;aider &agrave; retrouver celles qui ont disparu et &agrave; mettre fin &agrave; cette terreur qui hante notre maternit&eacute;.<br /></p>
      <p>Le monstre laisse des indices derri&egrave;re lui, dispers&eacute;s dans des lieux qui vous sont familiers. Chaque &eacute;nigme r&eacute;solue vous rapprochera de la v&eacute;rit&eacute;. Vous devrez explorer la maternit&eacute;, suivre les pistes, et affronter les secrets tapis dans l&apos;obscurit&eacute; pour d&eacute;masquer ce mal.<br /></p>
      <p>Vous avez neuf &eacute;nigmes &agrave; r&eacute;soudre avant que la v&eacute;rit&eacute; ne vous soit r&eacute;v&eacute;l&eacute;e. Chaque &eacute;nigme vous fournira un mot de passe ainsi que l&apos;emplacement du prochain indice.<br /></p>
      <p><strong>Ne perdez pas de temps. Le monstre r&ocirc;de encore, cach&eacute; dans les coins les plus sombres de l&rsquo;h&ocirc;pital&#8230; Parviendrez-vous &agrave; lever le voile sur ce myst&egrave;re avant qu&apos;il ne soit trop tard ?<br /></strong></p>
      <button onClick={onStartPress} >Commencer l&apos;enquête</button>
    </div>
  );
}
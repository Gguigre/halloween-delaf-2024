import { useNavigate } from "react-router-dom";

export default function Root() {

  const navigate = useNavigate();
  const onStartPress = () => {
    navigate("/enigme/1");
  }

  return (
    <div style={{paddingBottom: 48, paddingLeft: 24, paddingRight: 24, overflow: "scroll", width: "100%"}}>
      <h1>L&apos;enquête d&apos;Angélique</h1>
      <p>Je suis Angélique du Coudray, maîtresse des accouchements et gardienne de ces lieux. Depuis des siècles, je veille sur cette maternité, où de nombreuses vies ont vu le jour. Mais aujourd&apos;hui, un sombre mal s’est emparé de l’hôpital. Dans les recoins les plus obscurs de ce bâtiment, quelque chose de terrifiant s’est éveillé… un monstre qui kidnappe nos sages-femmes, les emportant loin de nous.</p>
      <p>Je sens sa présence grandir dans l’ombre, mais je suis impuissante à l&apos;arrêter seule. C’est pourquoi j&apos;ai besoin de vous, enquêteurs courageux. Vous devrez me prêter main forte pour retrouver celles qui ont disparu et mettre fin à cette terreur qui hante notre maternité.</p>
      <p>Le monstre laisse des indices derrière lui, dispersés à travers les lieux que vous connaissez bien. Chaque énigme résolue vous rapprochera de la vérité. Il vous faudra parcourir la maternité, suivre les pistes, et affronter les secrets cachés dans l’obscurité pour le débusquer.</p>
      <p>Vous avez neuf énigmes à résoudre avant que tout ne vous soit révélé. Chaque énigme vous donnera un mot de passe et la localisation du prochain indice.</p>
      <p><strong>Ne perdez pas de temps. Le monstre est encore là, tapi dans les coins les plus sombres de l’hôpital… Saurez-vous lever le voile sur ce mystère avant qu’il ne soit trop tard ?</strong></p>
      <button onClick={onStartPress} >Commencer l&apos;enquête</button>
    </div>
  );
}
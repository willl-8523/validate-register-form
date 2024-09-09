import React, { useEffect, useRef, useState } from 'react';

export default function ScrollAnimation() {
  const newsletterRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const newsletterEl = newsletterRef.current;
    const observer = new IntersectionObserver((entries) => {
      
      if (entries[0].isIntersecting) {
        setIsVisible(entries[0].isIntersecting);

        /* unobserve => permet d'arrêter d'observer un element special */
        observer.unobserve(newsletterEl);
      }
    });
    observer.observe(newsletterEl);

    /* 
      => la fonction () => observer.disconnect() dans le hook useEffect
        sert à nettoyer l'observateur (toutes les observations) 
        lorsque le composant est démonté (unmount) ou
        lorsque l'effet est réexécuté. 
      => Un composant est démonté lorsqu'il est retiré du DOM, cela se produit lorsque: 
        - Tu navigues vers une autre page (si tu utilises React Router).
        - Une condition change et le composant n'est plus affiché.
        - Un parent décide de ne plus rendre le composant.
    */
    // return () => observer.disconnect();
  }, []);

  return (
    <div className="srcoll__animation">
      <h1>Scroll Animation</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
        architecto illum repudiandae nesciunt laboriosam corporis facere
        necessitatibus magnam sint, ipsa fugiat error harum accusamus sit alias
        earum. Libero modi aspernatur, suscipit debitis autem inventore
        cupiditate possimus similique itaque dolor quisquam dolore unde sapiente
        ab consectetur nesciunt neque necessitatibus officia aliquid odio
        distinctio perferendis nobis. Rem magnam quasi ullam error deleniti
        maxime eaque quae ipsa vitae fuga impedit aperiam nostrum, tenetur est
        qui iste labore officia expedita, ab dignissimos, porro eveniet delectus
        cupiditate. Similique eius quae quasi pariatur nihil modi autem
        laudantium, corporis ab sequi possimus vero voluptatem totam, veniam
        tenetur inventore atque ipsum laborum suscipit blanditiis? Quas quam
        molestias asperiores magnam totam unde architecto tempore dignissimos
        inventore nam, sequi beatae debitis, aliquam sed porro? Omnis quam
        commodi soluta repellendus atque odio accusantium accusamus dolore!
        Explicabo earum enim facere blanditiis perferendis! Dolores error
        tempore quisquam numquam praesentium ea accusantium? Sequi deleniti
        repellat temporibus porro aut dicta. Temporibus voluptas vel provident
        praesentium! Aspernatur itaque saepe, excepturi nam totam labore, cumque
        fugiat asperiores, deserunt laboriosam facilis quos. Odit, magnam itaque
        deleniti laudantium ex iusto, impedit doloribus nam quod laborum tempora
        vitae incidunt eius omnis quae asperiores vero dolore iste blanditiis,
        officiis amet exercitationem accusantium! Voluptates, deleniti quia!
        Iusto, explicabo ipsam! Recusandae nemo, libero explicabo sint
        consequuntur facilis. Incidunt voluptates hic porro sapiente architecto
        sit optio ut quisquam perferendis, ratione natus ex doloremque, maxime,
        reprehenderit soluta deleniti. Debitis expedita quaerat a magni fugiat
        tempora rem ratione iure earum, ut dicta nisi veritatis, cum provident
        inventore cupiditate odit nulla illo quae labore veniam, molestias odio
        doloremque! Eveniet, earum! Accusamus eaque debitis at consectetur,
        pariatur nam labore animi reprehenderit quidem deserunt unde quibusdam
        porro alias fugit! Eum voluptatem, ea saepe deserunt perferendis illum
        earum nesciunt rerum numquam aliquid autem culpa quia debitis, quod
        voluptas? Molestias quibusdam impedit debitis quaerat ex corrupti id
        ipsam? Fugiat obcaecati voluptatem officiis debitis vel sunt nemo ipsa
        ratione, in perferendis ullam quasi voluptates adipisci numquam,
        voluptatum dolores placeat culpa. Molestiae, pariatur? Aperiam
        reiciendis dolorum ipsam doloremque esse, fuga iste quaerat a dolores
        deleniti, tenetur sint nostrum pariatur! Aspernatur eveniet recusandae
        ea consequatur alias laboriosam voluptatem nam temporibus magnam debitis
        dolor eos ipsam et ex perspiciatis, nemo eius itaque aut reiciendis,
        fuga dicta! Beatae nesciunt mollitia magni illo eos perspiciatis
        excepturi quo nihil, laborum repellendus est nulla perferendis quia,
        aspernatur nobis quas deleniti cumque harum odio reiciendis facilis
        voluptate! Ipsam hic accusantium repudiandae, laudantium voluptatum
        autem, odio dicta reiciendis quidem explicabo atque at esse velit,
        voluptate illo est minus nihil. Eos impedit explicabo ea? Quod, sit
        tempore at a laboriosam temporibus alias, odio consequuntur autem hic
        exercitationem ad laudantium impedit esse, et earum! At odio obcaecati
        earum architecto ad doloribus quibusdam voluptates aperiam, unde
        voluptatibus, reprehenderit suscipit voluptatum quia, perferendis neque
        sunt provident id repellendus. Culpa, magnam! Ullam deleniti autem sit
        recusandae, repudiandae consequuntur provident ex distinctio qui magnam
        unde aliquid, pariatur, dignissimos quasi error debitis laborum
        laboriosam totam officiis accusantium quisquam? Nulla molestias alias
        ipsa velit veritatis tempora unde nisi in!
      </p>
      <div ref={newsletterRef}>
        <div className={`newsletter ${isVisible ? 'active' : ''}`}>
          <h2>Observed element</h2>
        </div>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
        excepturi sunt totam officiis sapiente quis suscipit. In iusto nulla,
        repellendus adipisci ipsum earum ut corrupti quae mollitia itaque
        obcaecati possimus asperiores voluptate voluptatibus ullam sequi a
        praesentium maxime minus deserunt accusamus tempore dicta cupiditate!
        Nulla asperiores, quod consectetur quas adipisci libero vitae! Atque
        nisi quo earum porro minus. Excepturi, odit? Amet asperiores recusandae
        excepturi sapiente aperiam non quibusdam itaque! Suscipit, pariatur
        adipisci aut voluptate nulla fugit totam obcaecati dolor, accusantium,
        consectetur nemo aspernatur! Odio, ad facere harum commodi neque at
        cupiditate reprehenderit, quisquam minus dolorem facilis, praesentium
        ipsam blanditiis? Hic perspiciatis libero mollitia ut similique,
        cupiditate id quae atque dicta quam consectetur aut aspernatur molestiae
        ipsum incidunt repudiandae fugit vitae dignissimos ea sequi ipsam ad
        magnam voluptatem voluptatibus. Aperiam ut aliquid quibusdam excepturi
        amet fugit impedit odit rem quam ab nisi reprehenderit laboriosam porro
        beatae vitae esse velit iure quas voluptas sit nemo doloribus, ad
        adipisci? Ex quas ullam voluptates illo, fugit nostrum quia recusandae
        dignissimos velit! Quaerat iure quisquam rerum exercitationem velit aut
        recusandae accusantium, quae sit facilis voluptates tempore inventore
        ducimus impedit, distinctio numquam architecto enim aspernatur
        necessitatibus unde iusto. Facilis praesentium minima, soluta omnis
        commodi sed accusamus accusantium ex. Voluptate, aliquam. Reiciendis
        laborum ipsa alias! Nihil delectus beatae recusandae eum esse, cum,
        minima amet cupiditate repudiandae quam voluptas quod aspernatur
        dignissimos. Repellendus iure deleniti debitis animi. Eum, molestias.
        Tempora eos tempore ipsam accusamus nam consequuntur laborum eligendi
        earum repellat corporis illo est maiores quod, error iusto deleniti
        obcaecati debitis numquam atque ea quibusdam vero. At odio rerum quia
        nemo, recusandae voluptate ex nostrum eos a repellendus. Reiciendis,
        expedita harum! Iste a voluptate voluptates culpa magni. Est a
        praesentium iusto aspernatur, iure neque obcaecati vero nam fugiat
        impedit, id, voluptatibus natus rem consequuntur at dicta. Dolorem,
        facere voluptas?
      </p>
    </div>
  );
}

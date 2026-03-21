"use client";

import { useMemo } from "react";
import { LegalDocumentPage, type LegalSection } from "../components/LegalDocumentPage";

export default function SocialMediaPolicyPage() {
  const sections = useMemo<LegalSection[]>(
    () => [
      {
        id: "rozdzial-1",
        title:
          "I. Jaki jest cel i zakres Polityki mediów społecznościowych?",
        content: (
          <>
            <p>
              1.1. Aby zapewnić zgodność z prawem wdrożyliśmy Politykę mediów
              społecznościowych w związku z prowadzeniem działań w mediach
              społecznościowych z wykorzystaniem kont firmowych w social mediach
              pod marką: Twój Doradca OZE.
            </p>
            <p>
              1.2. Właścicielem kont firmowych w social mediach pod marką: Twój
              Doradca OZE jest Tomasz Kurek prowadzący działalność gospodarczą
              pod firmą: Tomasz Kurek Pośrednictwo z siedzibą w Koninie, ul.
              Stanisława Moniuszki nr 6 lok. 69, 62-610 Konin, wpisaną do
              Centralnej Ewidencji i Informacji o Działalności Gospodarczej pod
              numerami NIP: 6653064959 oraz numer REGON: 527957715.
            </p>
            <p>
              1.3. Korzystając z naszych kont w mediach społecznościowych
              wchodzisz z nami w interakcje, w szczególności, jeśli:
            </p>
            <ol>
              <li>
                zostawiasz reakcje pod treściami, które publikujemy w mediach
                społecznościowych, np. polubienia, komentarze,
              </li>
              <li>
                wysyłasz do nas wiadomości za pośrednictwem naszych kont w
                mediach społecznościowych,
              </li>
              <li>subskrybujesz nasze konta w mediach społecznościowych.</li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>1.4. Cel Polityki mediów społecznościowych to:</p>
            <ol>
              <li>
                określenie oficjalnych kont w mediach społecznościowych pod
                marką: Twój Doradca OZE,
              </li>
              <li>
                określenie zasad dotyczących komunikacji, w tym także standardów
                i zasad etyki, którymi kierujemy się prowadząc działania w
                mediach społecznościowych,
              </li>
              <li>
                opisanie zakresu i sposobu przetwarzania danych osobowych, które
                mogą być lub są gromadzone za pośrednictwem naszych kont w
                mediach społecznościowych,
              </li>
              <li>
                zapewnienie transparentności i zgodności z prawem wszystkich
                działań za pośrednictwem naszych kont w mediach
                społecznościowych.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "rozdzial-2",
        title:
          "II. Gdzie możesz znaleźć oficjalne konta w mediach społecznościowych marki Twój Doradca OZE?",
        content: (
          <>
            <p>
              2.1. Konta w mediach społecznościowych marki Twój Doradca OZE
              znajdują się pod adresem:
            </p>
            <ol>
              <li>
                Facebook: www.facebook.com/profile.php?id=61567533345453
              </li>
              <li>Instagram: www.instagram.com/twoj.doradca.oze</li>
              <li>TikTok: www.tiktok.com/@twojdoradca</li>
              <li>YouTube: www.youtube.com/@TwojDoradcaOZE</li>
            </ol>
          </>
        ),
      },
      {
        id: "rozdzial-3",
        title: "III. Jaki jest nasz cel korzystania z mediów społecznościowych?",
        content: (
          <>
            <p>
              3.1. Używamy mediów społecznościowych w szczególności do:
            </p>
            <ol>
              <li>
                rozpowszechniania marki Twój Doradca OZE i budowania jej
                rozpoznawalności,
              </li>
              <li>celów marketingowych,</li>
              <li>
                informowania o usługach i produktach marki Twój Doradca OZE,
              </li>
              <li>kontaktu z klientami,</li>
              <li>
                przekazywania informacji, w tym o aktualnościach, promocjach i
                innych akcjach marketingowych.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "rozdzial-4",
        title:
          "IV. Jakie są zasady dotyczące wpisów w mediach społecznościowych?",
        content: (
          <>
            <p>
              4.1. Jesteśmy marką zaangażowaną we wspieranie pozytywnego i
              pełnego szacunku środowiska w naszych mediach społecznościowych.
              Aby zapewnić konstruktywne i etyczne interakcje w naszych mediach
              społecznościowych, wyznaczyliśmy niżej wymienione wytyczne,
              zgodnie z którymi:
            </p>
            <ol>
              <li>
                wszystkie dyskusje i interakcje w naszych mediach
                społecznościowych powinny być prowadzone z szacunkiem i
                poszanowaniem innych osób i podmiotów, także innych użytkowników
                mediów społecznościowych,
              </li>
              <li>
                wszystkie komentarze dodawane i umieszczane w naszych mediach
                społecznościowych nie powinny naruszać dobrego imienia i praw
                osób trzecich,
              </li>
              <li>
                nie akceptujemy zamieszczania spamu, treści promocyjnych lub
                linków do stron zewnętrznych,
              </li>
              <li>
                wszystkie treści obraźliwe lub niestosowne będą przez nas
                usuwane,
              </li>
              <li>
                dane osobowe osób trzecich nie powinny być udostępniane w
                komentarzach lub w wiadomościach, np. numery telefonu, adresy
                zamieszkania, imiona i nazwiska,
              </li>
              <li>
                poufne informacje nie powinny być udostępniane zarówno w
                komentarzach, jak i w wiadomościach,
              </li>
              <li>
                nie należy udostępniać zdjęć, filmów ani innych materiałów bez
                zgody osób, których one dotyczą,
              </li>
              <li>
                dodawane komentarze muszą być zgodne z warunkami korzystania z
                usług i wytycznymi dotyczącymi społeczności danej platformy.
              </li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              4.3. W sytuacji, w której stwierdzimy, że w naszych mediach
              społecznościowych pojawiły się wpisy, które są tzw. niedozwolonymi
              treściami, możemy podjąć działania zmierzające do ich usunięcia
              albo tymczasowego lub stałego zablokowania konta użytkownika
              danych mediów społecznościowych, bez konieczności jego
              powiadomienia. Za niedozwolone treści uznajemy w szczególności:
            </p>
            <ol>
              <li>
                wpisy naruszające prawo, porządek publiczny lub zasady moralne,
              </li>
              <li>
                wpisy, które mają cel przestępczy lub nakłaniają do popełnienia
                przestępstwa,
              </li>
              <li>
                wpisy zawierające dane osobowe, które zostały opublikowane bez
                zgody danej osoby,
              </li>
              <li>
                wpisy, które w szczególności atakują, krytykują, zniesławiają,
                dyskryminują lub obrażają określoną osobę lub określony podmiot,
              </li>
              <li>
                wpisy na tematy rasowe, etniczne, seksualne, religijne lub
                polityczne,
              </li>
              <li>
                wpisy, które są plotkami, dezinformacjami lub zawierają
                fałszywe informacje,
              </li>
              <li>
                wpisy zawierające niechciane treści, np. szkodliwe programy,
              </li>
              <li>
                wpisy naruszające znaki towarowe, prawa autorskie lub inne prawa
                własności intelektualnej, a także prawa dotyczące wizerunku,
                prawa do prywatności lub inne prawa osób trzecich lub
                podmiotów,
              </li>
              <li>
                wpisy zabronione przez właścicieli platform określonych mediów
                społecznościowych.
              </li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              4.4. Możemy odpowiadać na wiadomości lub wpisy otrzymane
              bezpośrednio od użytkowników naszych mediów społecznościowych, ale
              nie jesteśmy zobowiązani do odpowiedzi na wszystkie wiadomości lub
              wpisy.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-5",
        title: "V. Pozostałe informacje i zastrzeżenia",
        content: (
          <>
            <p>
              5.1. Informacje, które dostarczane są za pomocą naszych mediów
              społecznościowych niekoniecznie reprezentują nasze oficjalne
              ogłoszenie lub opinie. Wszelkie oficjalne ogłoszenia i oficjalne
              stanowiska będą przekazywane za pośrednictwem naszej oficjalnej
              strony internetowej pod adresem: www.twojdoradcaoze.pl
            </p>
            <p>
              5.2. Wpisy użytkowników w mediach społecznościowych, które zostały
              w nich umieszczone, nie są kierowane przez nas, ani nie
              reprezentują naszych poglądów.
            </p>
            <p>
              5.3. Działania mediów społecznościowych mogą być zawieszone lub
              przerwane bez uprzedniego komunikatu i informacji. Nie ponosimy
              odpowiedzialności za jakiekolwiek szkody, straty, wydatki lub
              obciążenia poniesione przez użytkownika naszych mediów
              społecznościowych w wyniku takich okoliczności i działań.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-6",
        title: "VI. Zasady odpowiedzialności",
        content: (
          <>
            <p>
              6.1. Jeśli poniesiemy jakąkolwiek szkodę z powodu działań
              użytkownika w naszych mediach społecznościowych, możemy domagać
              się stosownego odszkodowania i naprawienia wyrządzonej szkody.
            </p>
            <p>
              6.2. Nie ponosimy odpowiedzialności za treści publikowane przez
              użytkownika naszych mediów społecznościowych oraz za szkody
              wyrządzone osobom trzecim lub innym podmiotom przez nich w wyniku
              ich działalności w naszych mediach społecznościowych. Użytkownik
              naszych mediów społecznościowych ponosi wyłączną odpowiedzialność
              za wszystkie szkody wywołane treścią wpisów i wiadomości, które
              opublikował lub wysłał za pośrednictwem mediów społecznościowych
              prowadzonych pod marką: Twój Doradca OZE.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-7",
        title:
          "VII. Jak możesz zgłosić nieodpowiednie treści lub zachowania?",
        content: (
          <>
            <p>
              7.1. Jeśli zauważysz komentarz, wpis lub inny materiał w naszych
              mediach społecznościowych, który narusza zasady określone w tym
              Regulaminie mediów społecznościowych, prosimy o zgłoszenie tego do
              nas na adres e-mail: tomasz@twojdoradcaoze.pl
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-8",
        title: "VIII. Jak chronimy Twoje dane osobowe?",
        content: (
          <>
            <p>
              8.1. Informacje, jakie dostarczasz na swój temat korzystając z
              naszych kont w mediach społecznościowych mogą być również danymi
              osobowymi.
            </p>
            <p>
              8.2. Szczegółowe zasady dotyczące przetwarzania danych osobowych
              znajdują się w:
            </p>
            <ol>
              <li>Regulaminie,</li>
              <li>Polityce Prywatności,</li>
            </ol>
            <p>
              które są dostępne na naszej stronie internetowej pod adresem:
              www.twojdoradcaoze.pl
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-9",
        title: "IX. Zmiany Regulaminu mediów społecznościowych",
        content: (
          <>
            <p>
              9.1. Regulamin mediów społecznościowych będzie poddawany regularnym
              przeglądom i w razie potrzeby będzie przez nas uzupełniany lub
              uaktualniany.
            </p>
            <p>
              9.2. Uzupełnienie oraz zmiany Regulaminu mediów społecznościowych
              mogą wynikać w szczególności z:
            </p>
            <ol>
              <li>zmiany przepisów prawa,</li>
              <li>
                zmiany regulaminów właścicieli platform, za pośrednictwem
                których prowadzimy nasze media społecznościowe,
              </li>
              <li>
                aktualnych wytycznych lub stanowisk, m.in. Prezesa Urzędu
                Ochrony Danych Osobowych i Prezesa Urzędu Ochrony Konkurencji i
                Konsumentów.
              </li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              9.3. W przypadku wprowadzenia zmian do Regulaminu mediów
              społecznościowych powiadomimy o nich w sposób wyraźny i
              dostosowany do okoliczności, np. wyświetlając dobrze widoczną
              informację na naszej stronie internetowej pod adresem:
              www.twojdoradcaoze.pl lub wysyłając wiadomość e-mail.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-10",
        title: "X. Postanowienia końcowe",
        content: (
          <>
            <p>
              10.1. Możesz uzyskać dostęp do Regulaminu mediów społecznościowych
              w każdym czasie za pośrednictwem odsyłacza zamieszczonego na
              naszej stronie internetowej pod adresem: www.twojdoradcaoze.pl
              oraz pobrać go i sporządzić jego wydruk.
            </p>
            <p>
              10.2. Regulamin mediów społecznościowych jest integralną częścią:
            </p>
            <ol>
              <li>Regulaminu,</li>
              <li>Polityki Prywatności,</li>
            </ol>
            <p>
              które są dostępne na naszej stronie internetowej pod adresem:
              www.twojdoradcaoze.pl
            </p>
            <p>
              10.3. Regulamin mediów społecznościowych obowiązuje od dnia
              11.12.2025 r.
            </p>
          </>
        ),
      },
    ],
    []
  );
  return (
    <LegalDocumentPage
      title="Polityka mediów społecznościowych"
      highlightedTitle="Twój Doradca OZE"
      description="Poniżej znajduje się aktualna polityka mediów społecznościowych. Dokument określa zasady korzystania z oficjalnych kont marki, standardy komunikacji, odpowiedzialności oraz podstawowe informacje dotyczące przetwarzania danych osobowych."
      effectiveDate="11.12.2025 r."
      pdfHref="/polityka-social-media.pdf"
      tocAriaLabel="Spis treści polityki mediów społecznościowych"
      notice={
        <>
          <strong>Informacja:</strong> Politykę mediów społecznościowych należy
          czytać łącznie z Regulaminem oraz Polityką Prywatności, jeżeli zostały
          udostępnione w Serwisie.
        </>
      }
      sections={sections}
    />
  );
}
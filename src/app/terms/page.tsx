"use client";

import { useMemo } from "react";
import { LegalDocumentPage, type LegalSection } from "../components/LegalDocumentPage";

export default function TermPage() {
  const sections = useMemo<LegalSection[]>(
    () => [
      {
        id: "rozdzial-1",
        title: "I. Słownik definicji",
        content: (
          <ol>
            <li>
              <strong>Regulamin</strong> – niniejszy Regulamin serwisu
              internetowego www.twojdoradcaoze.pl, będący jednocześnie
              regulaminem w rozumieniu Ustawy o świadczeniu usług drogą
              elektroniczną.
            </li>
            <li>
              <strong>Serwis</strong> – serwis internetowy Usługodawcy dostępny
              pod adresem www.twojdoradcaoze.pl.
            </li>
            <li>
              <strong>Usługodawca / my</strong> – Tomasz Kurek prowadzący
              działalność gospodarczą pod firmą: Tomasz Kurek Pośrednictwo z
              siedzibą w Koninie, ul. Stanisława Moniuszki nr 6 lok. 69, 62-610
              Konin, wpisaną do CEIDG pod numerami NIP: 6653064959 oraz REGON:
              527957715, e-mail: tomasz@twojdoradcaoze.pl, numer telefonu: +48
              531 577 575.
            </li>
            <li>
              <strong>Usługobiorca</strong> – osoba fizyczna, osoba prawna albo
              jednostka organizacyjna nieposiadająca osobowości prawnej, której
              ustawa przyznaje zdolność prawną, korzystająca z Usługi
              Elektronicznej za pośrednictwem Serwisu.
            </li>
            <li>
              <strong>Usługa Elektroniczna</strong> – usługa świadczona drogą
              elektroniczną przez Usługodawcę na rzecz Usługobiorcy za
              pośrednictwem Serwisu.
            </li>
            <li>
              <strong>Umowa</strong> – umowa o świadczenie Usługi Elektronicznej,
              której przedmiotem są usługi świadczone drogą elektroniczną przez
              Usługodawcę na rzecz Usługobiorcy za pośrednictwem Serwisu.
            </li>
            <li>
              <strong>Kodeks cywilny</strong> – ustawa z dnia 23 kwietnia 1964 r.
              – Kodeks Cywilny.
            </li>
            <li>
              <strong>Ustawa o prawach konsumenta</strong> – ustawa z dnia 30 maja
              2014 r. o prawach konsumenta.
            </li>
            <li>
              <strong>Ustawa o świadczeniu usług drogą elektroniczną</strong> –
              ustawa z dnia 18 lipca 2002 r. o świadczeniu usług drogą
              elektroniczną.
            </li>
            <li>
              <strong>
                Ustawa o przeciwdziałaniu nieuczciwym praktykom rynkowym
              </strong>{" "}
              – ustawa z dnia 23 sierpnia 2007 r. o przeciwdziałaniu nieuczciwym
              praktykom rynkowym.
            </li>
            <li>
              <strong>Ustawa o ochronie danych osobowych</strong> – ustawa z dnia
              10 maja 2018 r. o ochronie danych osobowych.
            </li>
            <li>
              <strong>RODO</strong> – Rozporządzenie Parlamentu Europejskiego i
              Rady UE 2016/679 z dnia 27 kwietnia 2016 r.
            </li>
            <li>
              <strong>Ustawa o prawie autorskim i prawach pokrewnych</strong> –
              ustawa z dnia 4 lutego 1994 r. o prawie autorskim i prawach
              pokrewnych.
            </li>
            <li>
              <strong>Polityka Prywatności</strong> – Polityka Prywatności
              Serwisu, udostępniona pod adresem www.twojdoradcaoze.pl.
            </li>
          </ol>
        ),
      },
      {
        id: "rozdzial-2",
        title: "II. Jaki jest cel i zakres Regulaminu?",
        content: (
          <>
            <p>2.1. Regulamin określa w szczególności:</p>
            <ol>
              <li>
                zasady i warunki, na jakich następuje korzystanie z
                funkcjonalności i narzędzi Serwisu przez Usługobiorców,
              </li>
              <li>
                rodzaje i zakres usług świadczonych drogą elektroniczną przez
                Serwis,
              </li>
              <li>
                warunki zawierania i rozwiązywania umów o świadczenie Usług
                Elektronicznych,
              </li>
              <li>tryb postępowania reklamacyjnego.</li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              2.2. Zapewniamy, że Serwis jest prowadzony zgodnie z przepisami
              obowiązującego prawa, zasadami współżycia społecznego, w
              szczególności zgodnie z przepisami:
            </p>
            <ol>
              <li>Ustawy o świadczeniu usług drogą elektroniczną,</li>
              <li>Ustawy o ochronie praw konsumentów,</li>
              <li>Kodeksu cywilnego,</li>
              <li>Ustawy o ochronie danych osobowych,</li>
              <li>RODO,</li>
              <li>
                Ustawy o przeciwdziałaniu nieuczciwym praktykom rynkowym,
              </li>
              <li>Ustawy o prawie autorskim i prawach pokrewnych,</li>
              <li>
                wszelkich innych przepisów właściwego prawa polskiego i prawa
                europejskiego.
              </li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              2.3. Postanowienia Regulaminu nie wyłączają ani nie ograniczają
              jakichkolwiek praw konsumentów, które przysługują konsumentom na mocy
              bezwzględnie obowiązujących przepisów prawa. W sytuacji, w której w
              Regulaminie znajdą się postanowienia niezgodne z przepisami Ustawy o
              ochronie praw konsumenta, pierwszeństwo mają przepisy tej ustawy.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-3",
        title: "III. Jakie są warunki i zasady korzystania z Serwisu?",
        content: (
          <>
            <p>
              3.1. Właścicielem, a zarazem administratorem Serwisu dostępnego pod
              adresem www.twojdoradcaoze.pl jest Usługodawca.
            </p>
            <p>
              3.2. Serwis dostarcza przestrzeni Usługobiorcom do publikowania
              zgodnych z tematyką serwisu ogłoszeń za pośrednictwem sieci Internet.
            </p>
            <p>
              3.3. Korzystanie z Serwisu jest możliwe wyłącznie na warunkach
              określonych w Regulaminie.
            </p>
            <p>
              3.4. Regulamin jest skierowany do wszystkich Usługobiorców, którzy
              korzystają z Serwisu.
            </p>
            <p>
              3.5. Każdy Usługobiorca z chwilą podjęcia czynności zmierzających do
              korzystania z Usług Elektronicznych Serwisu zobowiązany jest do
              przestrzegania postanowień Regulaminu.
            </p>
            <p>
              3.6. Aby skorzystać z Serwisu, Usługobiorca powinien zapoznać się z
              treścią Regulaminu oraz Polityki Prywatności. W tym celu
              Usługobiorca zostanie poproszony o zaakceptowanie postanowień
              Regulaminu i Polityki Prywatności za pośrednictwem udostępnionej
              funkcjonalności w Serwisie internetowym – tzw. check-box.
            </p>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              3.7. Usługobiorca ma obowiązek korzystać z Serwisu w sposób zgodny:
            </p>
            <ol>
              <li>z jego przeznaczeniem,</li>
              <li>z Regulaminem,</li>
              <li>z prawem i dobrymi obyczajami,</li>
              <li>
                mając na uwadze poszanowanie dóbr osobistych, danych osobowych oraz
                praw autorskich i własności intelektualnej Usługodawcy, innych
                podmiotów, innych Usługobiorców oraz osób trzecich.
              </li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              3.8. Zakazane jest dostarczanie przez Usługobiorcę treści o
              charakterze bezprawnym.
            </p>
            <p>
              3.9. Zakazane jest prezentowanie jakichkolwiek usług i produktów w
              Serwisie, w szczególności usług i produktów zabronionych przez przepisy
              powszechnie obowiązujące.
            </p>
            <p>
              3.10. Administratorem danych osobowych przetwarzanych w Serwisie jest
              Usługodawca. Dane osobowe przetwarzamy w celach, w zakresie i w
              oparciu o podstawy i zasady wskazane w Polityce Prywatności, która
              jest dostępna w Serwisie pod adresem: www.twojdoradcaoze.pl.
            </p>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              3.11. Aby korzystać z pełnej funkcjonalności Serwisu (w tym Usług
              Elektronicznych za pośrednictwem Serwisu) Usługobiorca powinien
              posiadać:
            </p>
            <ol>
              <li>
                komputer, tablet, laptop, smartfon lub inne urządzenie multimedialne
                z aktywnym dostępem do Internetu,
              </li>
              <li>
                przeglądarkę internetową: Internet Explorer w wersji 10.0 lub
                nowszej z włączoną obsługą ActiveX, JavaScript i Cookies, lub
                Mozilla FireFox w wersji 17.0 lub nowszej z włączoną obsługą
                appletów Javy, JavaScript i cookies, lub Google Chrome w wersji 23.0
                lub nowszej z włączoną obsługą appletów Javy, JavaScript i cookies,
              </li>
              <li>aktywny adres e-mail,</li>
              <li>aktywne połączenie z siecią Internet.</li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              3.12. Korzystanie z Serwisu lub kont na portalach społecznościowych
              Usługodawcy wiąże się ze standardowymi zagrożeniami występującymi w
              sieci Internet. Podstawowym zagrożeniem każdego użytkownika Internetu,
              w tym osób korzystających z Usług Elektronicznych świadczonych za
              pośrednictwem Serwisu, jest możliwość „zainfekowania” systemu
              teleinformatycznego oraz samego urządzenia złośliwym oprogramowaniem.
              Zalecamy stosowanie programu antywirusowego i bieżących aktualizacji
              przeglądarki oraz systemu operacyjnego.
            </p>
            <p>
              3.13. Usługodawcy przysługuje prawo pozbawienia Klienta prawa do
              korzystania z Serwisu, jak również ograniczenia jego dostępu do części
              lub całości zasobów Serwisu ze skutkiem natychmiastowym, w przypadku
              naruszenia Regulaminu, a w szczególności, gdy Usługobiorca:
            </p>
            <ol>
              <li>
                podał w trakcie kontaktu za pośrednictwem Serwisu dane niezgodne z
                prawdą, niedokładne lub nieaktualne, wprowadzające w błąd lub
                naruszające prawa osób trzecich,
              </li>
              <li>
                dopuścił się za pośrednictwem Serwisu naruszenia dóbr osobistych
                osób trzecich,
              </li>
              <li>
                dopuścił się innych zachowań, które zostaną uznane przez
                Usługodawcę za zachowania niezgodne z obowiązującymi przepisami
                prawa lub z ogólnymi zasadami korzystania z sieci Internet lub
                godzące w dobre imię Usługodawcy.
              </li>
            </ol>
            <p>
              3.14. W celu zapewnienia bezpieczeństwa przekazu komunikatów i danych
              w związku z Usługami Elektronicznymi świadczonymi w ramach Serwisu,
              podejmujemy środki techniczne i organizacyjne odpowiednie do stopnia
              zagrożenia bezpieczeństwa.
            </p>
            <p>3.15. Usługobiorca zobowiązany jest w szczególności do:</p>
            <ol>
              <li>
                niedostarczania i nieprzekazywania treści o charakterze bezprawnym,
              </li>
              <li>
                korzystania z Serwisu w sposób niezakłócający jego funkcjonowania,
              </li>
              <li>
                korzystania z Serwisu w sposób nieuciążliwy dla innych Usługobiorców
                oraz dla Usługodawcy,
              </li>
              <li>
                korzystania z wszelkich treści zamieszczonych w ramach Serwisu
                jedynie na własny użytek,
              </li>
              <li>
                korzystania ze Serwisu w sposób zgodny z przepisami prawa,
                postanowieniami Regulaminu oraz zasadami korzystania z sieci
                Internet.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "rozdzial-4",
        title:
          "IV. Usługi elektroniczne – reklamacje, odstąpienie i rozwiązanie Umowy",
        content: (
          <>
            <p>
              4.1. Usługodawca świadczy drogą elektroniczną następujące Usługi
              Elektroniczne:
            </p>
            <ol>
              <li>
                umożliwienie przeszukiwania informacji na temat produktów i usług
                Usługobiorcy w Serwisie,
              </li>
              <li>
                umożliwienie kontaktu z innymi Usługobiorcami poprzez formularz
                kontaktowy,
              </li>
              <li>umożliwienie przesyłania zapytań do Usługodawcy.</li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              4.2. Usługodawca podejmuje wszelkie wymagane prawem działania w celu
              zapewnienia w pełni poprawnego działania Serwisu.
            </p>
            <p>
              4.3. Usługobiorca ma obowiązek niezwłocznie powiadomić Usługodawcę o
              wszelkich nieprawidłowościach lub przerwach w funkcjonowaniu Serwisu.
            </p>
            <p>4.4. Usługodawca zastrzega sobie prawo do:</p>
            <ol>
              <li>zmiany zakresu lub formy Usług Elektronicznych,</li>
              <li>
                przerwy w świadczeniu Usług Elektronicznych z przyczyn technicznych
                lub organizacyjnych.
              </li>
            </ol>
            <p>
              4.5. Usługodawca nie ponosi odpowiedzialności za przerwy w dostępie do
              Serwisu wynikające z przyczyn niezależnych od niego, w tym za problemy
              techniczne w sieci Internet.
            </p>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              4.6. Usługobiorca może zgłaszać reklamacje z tytułu nieprawidłowości
              Usługi Elektronicznej:
            </p>
            <ol>
              <li>
                za pośrednictwem poczty elektronicznej: tomasz@twojdoradcaoze.pl,
              </li>
              <li>telefonicznie pod numerem: +48 531 577 575.</li>
            </ol>
            <p>4.7. W reklamacji Usługobiorca powinien podać:</p>
            <ol>
              <li>swoje imię i nazwisko,</li>
              <li>adres do korespondencji,</li>
              <li>
                rodzaj i datę wystąpienia nieprawidłowości związanej z
                funkcjonowaniem Serwisu.
              </li>
            </ol>
            <p>
              4.8. Usługodawca zobowiązuje się do rozpatrzenia każdej reklamacji w
              terminie do 14 dni.
            </p>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              4.9. Usługobiorcy przysługuje prawo do rezygnacji z Usług
              Elektronicznych świadczonych przez Usługodawcę za pośrednictwem
              Serwisu w każdym czasie, ze skutkiem natychmiastowym i bez
              konieczności podawania przyczyny poprzez:
            </p>
            <ol>
              <li>zaprzestanie korzystania z Usług Elektronicznych,</li>
              <li>
                wysłanie wiadomości na adres e-mail Usługodawcy:
                tomasz@twojdoradcaoze.pl.
              </li>
            </ol>
            <p>
              4.10. Odstąpienie lub rozwiązanie Umowy Usługobiorca powinien złożyć
              w formie wyraźnego oświadczenia woli.
            </p>
            <p>
              4.11. Oświadczenie Usługobiorcy powinno zawierać dokładne dane
              Usługobiorcy; w celu weryfikacji tożsamości może on zostać poproszony o
              dodatkowe dane.
            </p>
            <p>
              4.12. Niezależnie od innych środków przewidzianych przez przepisy
              prawa, Usługodawca ma prawo wypowiedzenia Umowy Usługobiorcy w
              przypadku, gdy:
            </p>
            <ol>
              <li>
                Usługobiorca nadal w sposób rażący lub uporczywy narusza
                postanowienia Regulaminu lub Regulaminu Mediów Społecznościowych,
              </li>
              <li>
                działania Usługobiorcy naruszają dobra osobiste Usługodawcy lub osób
                trzecich.
              </li>
            </ol>
            <p>
              4.13. Oświadczenie Usługodawcy o rozwiązaniu Umowy następuje za
              pośrednictwem poczty elektronicznej na adres e-mail podany przez
              Usługobiorcę.
            </p>
            <p>
              4.14. Usługobiorca i Usługodawca mogą także rozwiązać Umowę za
              porozumieniem stron.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-5",
        title: "V. Jak chronimy dane osobowe?",
        content: (
          <>
            <p>
              5.1. Udostępnione przez Usługobiorców podczas korzystania z Serwisu
              dane osobowe są przetwarzane w celach i na warunkach określonych
              zgodnie z Polityką Prywatności, która jest integralną częścią
              Regulaminu i jest dostępna w Serwisie pod adresem
              www.twojdoradcaoze.pl.
            </p>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              5.2. Usługodawca zapewnia, że działa zgodnie z prawem i realizuje
              wszelkie obowiązki wynikające z RODO oraz Ustawy o ochronie danych
              osobowych, zgodnie z którymi Usługobiorcy przysługuje:
            </p>
            <ol>
              <li>prawo wglądu do swoich danych osobowych,</li>
              <li>prawo do zmiany danych osobowych,</li>
              <li>prawo do poprawiania danych osobowych,</li>
              <li>prawo żądania usunięcia danych osobowych.</li>
            </ol>
            <p>
              Skorzystanie z powyższych praw wobec nas odbywa się na warunkach
              określonych w Polityce Prywatności.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-6",
        title: "VI. Prawa autorskie oraz prawa własności intelektualnej",
        content: (
          <>
            <p>
              6.1. Wszystkie nazwy handlowe, nazwy produktów, firm i ich logo użyte
              na stronie internetowej Serwisu należą do ich właścicieli i są używane
              wyłącznie w celach identyfikacyjnych.
            </p>
            <p>
              6.2. Znaki handlowe Usługodawcy oraz podmiotów trzecich powinny być
              używane zgodnie z obowiązującymi przepisami prawa.
            </p>
            <p>
              6.3. W razie jakichkolwiek wątpliwości przyjmuje się, że Usługobiorca
              korzystający z Serwisu nie otrzymuje żadnych praw autorskich do
              materiałów, do których uzyskuje dostęp podczas korzystania z Usług
              Elektronicznych. Usługobiorcy udzielana jest jedynie niewyłączna,
              niezbywalna, nieprzenoszalna licencja na korzystanie z tych treści
              wyłącznie przez czas i w zakresie zgodnym z przeznaczeniem Usług
              Elektronicznych i przepisami prawa.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-7",
        title: "VII. Dostępność i działalność Serwisu",
        content: (
          <>
            <p>
              7.1. Usługodawca dołoży wszelkich starań, aby zapewnić dostępność
              Serwisu przez 7 dni w tygodniu i 24 godziny na dobę. Dostęp do
              Serwisu może zostać tymczasowo zawieszony bez wcześniejszego
              zawiadomienia ze względów konserwacyjnych, migracyjnych,
              aktualizacyjnych lub z powodu nieprawidłowego działania sieci.
            </p>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              7.2. Usługodawca zastrzega sobie prawo do zmiany Serwisu lub jego
              części dla wszystkich lub niektórych Usługobiorców w celu
              przeprowadzenia testów nowych funkcji i zapewnienia lepszego
              doświadczenia Usługobiorcy, a także do modyfikacji lub zawieszenia
              całości lub części dostępu do Serwisu lub jego funkcjonalności,
              tymczasowo lub na stałe.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-8",
        title: "VIII. Zmiany Regulaminu",
        content: (
          <>
            <p>
              8.1. Regulamin będzie poddawany regularnym przeglądom i w razie
              potrzeby uzupełniany lub aktualizowany.
            </p>
            <p>Aktualizacja Regulaminu może wynikać w szczególności z:</p>
            <ol>
              <li>zmiany przepisów prawa,</li>
              <li>
                aktualnych wytycznych, m.in. Prezesa Urzędu Ochrony Danych
                Osobowych, Prezesa Urzędu Ochrony Konkurencji i Konsumentów.
              </li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              8.2. Usługodawca zastrzega sobie prawo do zmiany Regulaminu w każdym
              czasie, o czym poinformuje Usługobiorców poprzez zamieszczenie
              informacji na stronie Serwisu.
            </p>
            <p>
              8.3. Zmiany w Regulaminie wchodzą w życie w terminie określonym w
              ogłoszeniu, nie krótszym niż 7 dni od daty zamieszczenia.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-9",
        title: "IX. Postanowienia końcowe",
        content: (
          <>
            <p>
              9.1. Usługobiorca może uzyskać dostęp do Regulaminu w każdym czasie za
              pośrednictwem odsyłacza zamieszczonego w Serwisie pod adresem
              www.twojdoradcaoze.pl oraz pobrać go i sporządzić jego wydruk.
            </p>
            <p>
              9.2. Integralną częścią Regulaminu jest Polityka Prywatności oraz
              Regulamin Mediów Społecznościowych, które są dostępne w Serwisie.
            </p>
            <p>
              9.3. W sprawach nieuregulowanych w Regulaminie mają zastosowanie
              przepisy polskiego prawa powszechnie obowiązującego. Rozstrzyganie
              ewentualnych sporów nastąpi przez sąd właściwy zgodnie z właściwymi
              przepisami prawa.
            </p>
            <p>9.4. Regulamin obowiązuje od dnia 11.12.2025 r.</p>
          </>
        ),
      },
    ],
    []
  );
return (
    <LegalDocumentPage
      title="Regulamin serwisu internetowego"
      highlightedTitle="www.twojdoradcaoze.pl"
      description="Poniżej znajduje się aktualny regulamin korzystania z serwisu. Dokument został opracowany w celu jasnego określenia zasad korzystania z funkcjonalności strony, praw i obowiązków użytkowników oraz zasad świadczenia usług drogą elektroniczną."
      effectiveDate="11.12.2025 r."
      pdfHref="/regulamin-twoj-doradca-oze.pdf"
      tocAriaLabel="Spis treści regulaminu"
      notice={
        <>
          <strong>Informacja:</strong> Regulamin należy czytać łącznie z
          Polityką Prywatności oraz innymi dokumentami powiązanymi, jeżeli
          zostały udostępnione w Serwisie.
        </>
      }
      sections={sections}
    />
  );
}
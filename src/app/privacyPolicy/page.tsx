"use client";

import { useMemo } from "react";
import { LegalDocumentPage, type LegalSection } from "../components/LegalDocumentPage";

export default function PrivacyPolicyPage() {
  const sections = useMemo<LegalSection[]>(
    () => [
      {
        id: "rozdzial-1",
        title: "I. Jaki jest cel i zakres Polityki Prywatności?",
        content: (
          <>
            <p>
              1.1. W celu zapewnienia jak najlepszej ochrony danych osobowych,
              które zostały przekazane przez nas za pośrednictwem Serwisu
              www.twojdoradcaoze.pl, informujemy, że:
            </p>
            <ol>
              <li>chronimy powierzone nam dane osobowe na najwyższym poziomie,</li>
              <li>
                uwzględniamy przepisy obowiązującego prawa, w szczególności
                RODO.
              </li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              1.2. Wszelkie wyrazy lub wyrażenia pisane w treści niniejszej
              Polityki Prywatności dużą literą należy rozumieć zgodnie z ich
              definicją zawartą w Regulaminie www.twojdoradcaoze.pl.
            </p>

            <p>1.3. Celem Polityki Prywatności to:</p>
            <ol>
              <li>określenie zasad korzystania z Serwisu,</li>
              <li>
                przekazanie ważnych informacji na temat tego, w jaki sposób
                przetwarzane są dane osobowe Usługobiorców podczas odwiedzania
                naszej Serwisu i korzystania z niego,
              </li>
              <li>określenie zasad i polityki cookies,</li>
              <li>określenie zasad dotyczące bezpieczeństwa danych.</li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              1.4. Polityka Prywatności ma zastosowanie do wszystkich
              przypadków, w których:
            </p>
            <ol>
              <li>jesteśmy administratorem danych osobowych,</li>
              <li>
                przetwarzamy dane osobowe, które zostały pozyskane bezpośrednio
                od osób, których dane dotyczą,
              </li>
              <li>
                przetwarzamy dane osobowe, które zostały pozyskane w sposób
                pośredni, poprzez otrzymanie danych osobowych od innych
                uprawnionych podmiotów do ich przetwarzania.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "rozdzial-2",
        title: "II. Kto jest administratorem danych osobowych?",
        content: (
          <>
            <p>
              2.1. Administratorem danych osobowych jest Usługodawca i
              właściciel Serwisu – Tomasz Kurek prowadzący działalność
              gospodarczą pod firmą: Tomasz Kurek Pośrednictwo z siedzibą w
              Koninie, ul. Stanisława Moniuszki nr 6 lok. 69, 62-610 Konin,
              wpisaną do Centralnej Ewidencji i Informacji o Działalności
              Gospodarczej pod numerami NIP: 6653064959 oraz numer REGON:
              527957715, adres poczty e-mail: tomasz@twojdoradcaoze.pl, numer
              telefonu: +48 531 577 575.
            </p>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              2.2. W razie pytań dotyczących zasad prywatności i przetwarzania
              danych osobowych przez nas, Usługobiorca może skontaktować się w
              następujący sposób:
            </p>
            <ol>
              <li>
                za pośrednictwem poczty e-mail: tomasz@twojdoradcaoze.pl lub
              </li>
              <li>
                telefonicznie pod numerem telefonu: +48 531 577 575. Koszt
                połączenia zgodny z cennikiem operatora sieci, z której
                wykonywane jest połączenie.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "rozdzial-3",
        title: "III. Jaki jest cel i zakres przetwarzania danych osobowych?",
        content: (
          <>
            <p>
              3.1. Jako administrator danych osobowych przetwarzamy dane
              osobowe Usługobiorców w celu:
            </p>
            <ol>
              <li>
                zapewnienia obsługi i kontaktowych – odpowiedzi na pytania /
                zgłoszenia za pośrednictwem poczty e-mail/telefonicznie oraz
                formularza kontaktowego (realizacja umowy o świadczenie Usług
                Elektronicznych),
              </li>
              <li>
                obsługi reklamacji (realizacja umowy o świadczenie Usług
                Elektronicznych),
              </li>
              <li>
                umożliwienia świadczenia Usług Elektronicznych (realizacja umowy
                o świadczenie Usług Elektronicznych),
              </li>
              <li>
                zarządzania relacjami i w celach marketingowych, w tym
                zarządzania reklamami profilowanymi (prawnie uzasadniony interes
                Usługodawcy),
              </li>
              <li>
                prowadzenia analiz statystycznych Serwisu (prawnie uzasadniony
                interes Usługodawcy),
              </li>
              <li>
                windykacji należności i prowadzenia postępowań sądowych,
                arbitrażowych i mediacyjnych (prawnie uzasadniony interes
                Usługodawcy),
              </li>
              <li>
                wykonania obowiązków wynikających z decyzji, orzeczeń wydawanych
                przez uprawnione organy, instytucje lub sądy (wykonanie
                obowiązku prawnego).
              </li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              3.2. Jako administrator danych osobowych przetwarzamy dane
              osobowe Usługobiorców w celu wykonania czynności stosownie do
              udzielonej przez Usługobiorcę zgody, w tym do:
            </p>
            <ol>
              <li>przetwarzania danych osobowych w celach marketingowych,</li>
              <li>zapisywania danych w plikach cookies.</li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              3.3. Zakres danych osobowych, jakie przetwarzamy jako
              administrator danych osobowych, zależy od celu przetwarzania
              danych, tj. w przypadku w szczególności:
            </p>
            <ol>
              <li>
                obsługa i kontakt: imię i nazwisko, adres e-mail, numer
                telefonu,
              </li>
              <li>
                obsługa reklamacji: imię i nazwisko, adres e-mail, numer
                telefonu oraz adres korespondencyjny (w przypadku formy pisemnej
                reklamacji).
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "rozdzial-4",
        title: "IV. Kim są odbiorcy danych osobowych?",
        content: (
          <>
            <p>
              4.1. W niektórych sytuacjach będziemy przekazywali dane osobowe
              Usługobiorców następującym podmiotom zewnętrznym, w szczególności:
            </p>
            <ol>
              <li>
                podmiotom przetwarzającym dane osobowe na mocy umów powierzenia
                przetwarzania danych osobowych, np.:
                <ol>
                  <li>
                    firmom świadczącym usługi z zakresu dostarczania
                    oprogramowania, serwisowania oprogramowania lub sprzętu, z
                    którego korzystamy,
                  </li>
                  <li>
                    firmą realizującym usługę, w tym podwykonawcą, producentom,
                  </li>
                  <li>firmom konsultingowym,</li>
                  <li>firmom świadczącym usługi prawne,</li>
                  <li>
                    firmom współpracującym w ramach kampanii marketingowych,
                  </li>
                  <li>
                    podmiotom wspierającym w świadczeniu Usług Elektronicznych,
                  </li>
                  <li>firmom windykacyjnym.</li>
                </ol>
              </li>
              <li>
                organom nadzorującym przestrzeganie prawa, organom regulacyjnym
                i innym organom administracji publicznej.
              </li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              4.2. Dane osobowe Usługobiorców mogą zostać przeniesione na
              kupującego, w celu zapewnienia kontynuacji świadczenia usługi w
              ramach Serwisu, także w przypadku zmiany właściciela Serwisu.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-5",
        title: "V. Przez jaki okres przechowujemy dane osobowe?",
        content: (
          <>
            <p>
              5.1. Okres przetwarzania danych osobowych Usługobiorcy przez nas
              zależy od:
            </p>
            <ol>
              <li>celu w jakim zostały zebrane i przetwarzane,</li>
              <li>przepisów prawa,</li>
              <li>pozyskanych lub innych oświadczeń.</li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              5.2. Będziemy przechowywać dane osobowe Usługodawcy przez
              następujące okresy:
            </p>
            <ol>
              <li>
                w związku z wykonaniem Umowy oraz dochodzeniem roszczeń i obroną
                przed roszczeniami z nią związanymi – przez okres obowiązywania
                umowy, a po jej zakończeniu do czasu przedawnienia roszczeń z
                nią związanymi,
              </li>
              <li>
                w związku z obsługą wniosków, skarg, reklamacji lub innych pism
                kierowanych do Usługodawcy – do czasu wyjaśnienia sprawy objętej
                wnioskiem, skargą, reklamacją lub innym pismem,
              </li>
              <li>
                w związku z marketingiem bezpośrednim – do czasu zgłoszenia
                sprzeciwu wobec takiego przetwarzania lub wycofania stosownej
                zgody,
              </li>
              <li>
                w związku z badaniami statystycznymi, działaniami analitycznymi,
                badaniem satysfakcji – przez okres obowiązywania umowy, a po jej
                zakończeniu wyłącznie w formie zanonimizowanej lub zagregowanej,
              </li>
              <li>
                w związku z realizacją obowiązków prawnych – do czasu
                wygaśnięcia obowiązku (np. dokumenty księgowe wymagają
                przechowywania przez okres 5 lat),
              </li>
              <li>
                informacje wynikające z plików cookies własnych będą
                przechowywane przez nas tylko podczas bieżącej sesji
                przeglądarki i zostaną usunięte po zamknięciu przeglądarki.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "rozdzial-6",
        title:
          "VI. Jakie posiadasz uprawnienia w zakresie przetwarzania danych osobowych?",
        content: (
          <>
            <p>
              6.1. W związku z przetwarzaniem danych osobowych Usługobiorcy
              przysługuje szereg praw wynikających z RODO, tj.:
            </p>
            <ol>
              <li>prawo do cofnięcia wyrażonej zgody,</li>
              <li>prawo dostępu do danych osobowych i uzyskania kopii danych,</li>
              <li>prawo sprostowania danych osobowych,</li>
              <li>
                prawo usunięcia danych osobowych (tzw. prawo do bycia
                zapomnianym),
              </li>
              <li>prawo ograniczenia przetwarzania danych osobowych,</li>
              <li>prawo do przenoszenia danych,</li>
              <li>
                prawo do wyrażenia sprzeciwu wobec przetwarzania danych
                osobowych.
              </li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              6.2. Prawo do cofnięcia wyrażonej zgody: Jeśli przetwarzanie
              danych osobowych Usługobiorcy odbywa się na podstawie zgody,
              Usługobiorca ma prawo do cofnięcia wszystkich lub niektórych zgód
              dotyczących przetwarzania danych w określonym celu. Cofnięcie
              zgody nie będzie wpływało na przetwarzanie danych osobowych
              Usługobiorcy przed cofnięciem zgody ani podstawę prawną tego
              przetwarzania.
            </p>

            <p>
              6.3. Prawo dostępu do danych osobowych: Usługobiorcy przysługuje
              prawo do uzyskania potwierdzenia, czy jego dane osobowe są
              przetwarzane przez nas, jak również prawo uzyskania potwierdzenia
              dotyczącego zakresu określonych informacji, np. dotyczących celów
              przetwarzania, kategorii przetwarzanych danych, itp.
              Usługobiorcy przysługuje także prawo dostępu do swoich danych
              osobowych, w postaci uzyskania ich kopii.
            </p>

            <p>
              6.4. Prawo do sprostowania danych osobowych: Usługobiorcy
              przysługuje prawo do żądania od nas niezwłocznego poprawienia
              danych osobowych w sytuacji, gdy są one nieprawidłowe lub
              niekompletne.
            </p>

            <p>
              6.5. Prawo do usunięcia danych (tzw. „prawo do bycia zapomnianym”):
              Usługobiorca może zażądać usunięcia danych osobowych w przypadku,
              gdy dane były wykorzystywane niezgodne z prawem lub gdy cofnięta
              została zgoda na dalsze przetwarzanie danych. „Prawo do bycia
              zapomnianym” nie stanowi jednak bezwzględnego prawa do usunięcia
              danych osobowych, ponieważ istnieją od niego pewne wyjątki, np. w
              przypadku, gdy potrzebujemy nadal je wykorzystywać w celu
              ustalenia, dochodzenia lub obrony roszczeń prawnych, a także w
              celu wypełnienia obowiązku prawnego.
            </p>

            <p>
              6.6. Prawo do ograniczenia przetwarzania: Usługobiorcy
              przysługuje prawo do powstrzymania nas przed dalszym
              wykorzystywaniem danych osobowych w przypadku, gdy np. jesteśmy w
              trakcie oceny żądania sprostowania danych. W sytuacji ograniczenia
              przetwarzania danych osobowych nadal możemy je przechowywać,
              jednak nie możemy ich dalej aktywnie wykorzystywać.
            </p>

            <p>
              6.7. Prawo do przenoszenia danych: Usługobiorcy przysługuje prawo
              do otrzymania oraz ponownego wykorzystania określonych danych
              osobowych dla swoich własnych celów u innych, odrębnych
              administratorów danych. Z tego prawa Usługobiorca może skorzystać
              wyłącznie w odniesieniu do danych osobowych, które są
              przetwarzane w sposób zautomatyzowany za zgodą Usługobiorcy lub w
              celu wykonania Umowy. W takim przypadku dostarczymy kopię danych
              osobowych w ustrukturyzowanym, powszechnie używanym oraz
              nadającym się do odczytu maszynowego formacie.
            </p>

            <p>
              6.8. Prawo do wniesienia sprzeciwu: Jeżeli przetwarzanie danych
              osobowych odbywało się na podstawie naszego prawnie uzasadnionego
              interesu, Usługobiorcy przysługuje prawo do wniesienia sprzeciwu
              wobec dalszego ich przetwarzania. Możemy odmówić realizacji tego
              prawa, jeżeli wykażemy ważne i prawnie uzasadnione podstawy
              przetwarzania mające nadrzędny charakter wobec interesów, praw i
              wolności Usługobiorcy lub podstaw do ustalenia, dochodzenia lub
              obrony roszczeń.
            </p>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              6.9. Jeżeli Usługobiorca chce skorzystać z wyżej wymienionych
              praw, może skontaktować się z nami:
            </p>
            <ol>
              <li>
                za pośrednictwem poczty e-mail: tomasz@twojdoradcaoze.pl lub
              </li>
              <li>
                telefonicznie pod numerem telefonu: +48 531 577 575. Koszt
                połączenia zgodny z cennikiem operatora sieci, z której
                wykonywane jest połączenie.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "rozdzial-7",
        title:
          "VII. Kiedy podanie danych osobowych może być obowiązkowe?",
        content: (
          <>
            <p>
              7.1. Podanie przez Usługobiorcę danych osobowych jest dobrowolne,
              z wyjątkiem sytuacji, gdy prawo obliguje Usługobiorcę do ich
              podania, w szczególności:
            </p>
            <ol>
              <li>prawo skarbowe,</li>
              <li>przepisy o rachunkowości,</li>
              <li>
                ich podanie jest niezbędne do korzystania z Serwisu w przypadku
                chęci kontaktu, w szczególności za pośrednictwem formularza
                kontaktowego.
              </li>
            </ol>
          </>
        ),
      },
      {
        id: "rozdzial-8",
        title: "VIII. Czy dane osobowe są przekazywane poza EOG?",
        content: (
          <>
            <p>
              8.1. Dane osobowe Usługobiorców przechowywane są wyłącznie na
              terenie Europejskiego Obszaru Gospodarczego (EOG).
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-9",
        title: "IX. Pouczenie dotyczące skargi do Organu Nadzoru",
        content: (
          <>
            <p>
              9.1. Jeżeli Usługobiorca uzna, że przetwarzanie jego danych
              narusza przepisy RODO, przysługuje mu prawo wniesienia skargi do
              organu nadzoru, którym w Polsce jest Prezes Urzędu Ochrony Danych
              Osobowych, z którym można skontaktować się w następujący sposób:
            </p>
            <ol>
              <li>telefonicznie: 22/531 03 00,</li>
              <li>
                poprzez elektroniczną skrzynkę podawczą pod adresem:
                https://uodo.gov.pl/pl/p/kontakt,
              </li>
              <li>listownie: ul. Stawki 2, 00-193 Warszawa.</li>
            </ol>
          </>
        ),
      },
      {
        id: "rozdzial-10",
        title:
          "X. Czy dane osobowe są przetwarzane w sposób zautomatyzowany?",
        content: (
          <>
            <p>
              10.1. RODO nakłada na nas obowiązek informowania o
              zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu, o
              którym mowa w art. 22 ust. 1 i 4 RODO, oraz – przynajmniej w tych
              przypadkach – istotnych informacji o zasadach ich podejmowania, a
              także o znaczeniu i przewidywanych konsekwencjach takiego
              przetwarzania dla osoby, której dane dotyczą. Mając to na uwadze,
              podajemy te informacje na temat możliwego profilowania.
            </p>

            <p>
              10.2. Możemy korzystać w Serwisie z profilowania do celów
              marketingu bezpośredniego, ale decyzje podejmowane na jego
              podstawie przez nas nie dotyczą zawarcia lub odmowy zawarcia
              Umowy Sprzedaży lub możliwości korzystania z Usług Elektronicznych
              w Serwisie.
            </p>

            <p>
              10.3. Profilowanie danych osobowych polega na przetwarzaniu tych
              danych w celu optymalizacji naszej Serwisu oraz wykorzystania
              niektórych informacji w celu przedstawiania oferty najbardziej
              zbliżonej do preferencji. Monitorujemy w jaki sposób Usługobiorca
              korzysta z innych witryn – dzięki czemu możemy też udostępnić
              materiały marketingowe dotyczące oferty Usługodawcy na innych
              stronach lub w innych kanałach komunikacji.
            </p>

            <p>
              10.4. Osoba, której dane dotyczą, ma prawo do tego, aby nie
              podlegać decyzji, która opiera się wyłącznie na zautomatyzowanym
              przetwarzaniu, w tym profilowaniu, i wywołuje wobec tej osoby
              skutki prawne lub w podobny sposób na nią wpływa.
            </p>

            <p>
              10.5. Usługobiorca, który nie chce podlegać profilowaniu, powinien
              wylogować się ze wszystkich urządzeń i usunąć z nich pliki
              cookies.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-11",
        title: "XI. Oświadczenie o bezpieczeństwie danych osobowych",
        content: (
          <>
            <p>
              11.1. Stosujemy środki techniczne i organizacyjne zapewniające
              ochronę przetwarzanych danych osobowych odpowiednią do zagrożeń
              oraz kategorii danych objętych ochroną, a w szczególności
              zabezpiecza dane przed ich udostępnieniem osobom
              nieupoważnionym, zabraniem przez osobę nieuprawnioną,
              przetwarzaniem z naruszeniem obowiązujących przepisów oraz zmianą,
              utratą, uszkodzeniem lub zniszczeniem.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-12",
        title: "XII. Czym są pliki cookies i jak je wykorzystujemy?",
        content: (
          <>
            <p>
              12.1. Serwis wykorzystuje pliki cookies. Cookies to małe fragmenty
              tekstu wysyłane przez Serwis, które są zapisywane na urządzeniu
              końcowym (komputerze, laptopie, smartfonie), z którego
              Usługobiorca korzysta podczas przeglądania Serwisu. W plikach
              cookies znajdują się różne informacje niezbędne do prawidłowego
              funkcjonowania Serwisu. Pliki cookies mogą być także
              wykorzystywane przez systemy informatyczne podmiotów trzecich,
              np. Google Analytics.
            </p>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              12.2. Serwis wykorzystuje następujące rodzaje plików cookies w
              celach:
            </p>
            <ol>
              <li>
                niezbędne – te pliki są potrzebne do działania Serwisu i nie
                mogą być wyłączone,
              </li>
              <li>
                statystyczne – te pliki pozwalają analizować ruch na stronie
                (np. Google Analytics),
              </li>
              <li>
                marketingowe – te pliki są wykorzystywane do personalizacji
                reklam (np. Meta Pixel),
              </li>
              <li>
                funkcjonalne – te pliki zapamiętują preferencje Usługobiorców
                korzystających z Serwisu, np. język strony.
              </li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              12.3. Aby dowiedzieć się, jak zarządzać plikami cookies, w tym jak
              wyłączyć ich obsługę w przeglądarce, Usługobiorca może skorzystać
              z pliku pomocy przeglądarki. Z informacjami na ten temat
              Usługobiorca może zapoznać się wciskając klawisz F1 w
              przeglądarce. Ponadto odpowiednie wskazówki znajdują się na
              następujących podstronach, w zależności od przeglądarki, której
              używa:
            </p>
            <ol>
              <li>Google Chrome,</li>
              <li>Opera,</li>
              <li>Safari,</li>
              <li>Mozilla Firefox,</li>
              <li>Microsoft Edge.</li>
            </ol>

            <p>
              12.4. Pliki cookies nie będą przetwarzane przez Serwis dłużej niż
              12 miesięcy od ostatniej wizyty na Serwisie.
            </p>

            <p>
              12.5. Korzystając z odpowiednich opcji przeglądarki, Usługobiorca
              w każdej chwili może:
            </p>
            <ol>
              <li>usunąć pliki cookies,</li>
              <li>blokować wykorzystanie plików cookies w przyszłości.</li>
            </ol>

            <p>
              W takich przypadkach Serwis nie będzie dłużej przetwarzać
              informacji o plikach cookies Usługobiorców Serwisu.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-13",
        title: "XIII. Zmiany Polityki Prywatności",
        content: (
          <>
            <p>
              13.1. Polityka Prywatności będzie poddawana regularnym przeglądom
              i w razie potrzeby uzupełniana lub aktualizowana.
            </p>

            <p>
              13.2. Aktualizacja Polityki Prywatności może wynikać w
              szczególności z:
            </p>
            <ol>
              <li>zmiany przepisów prawa,</li>
              <li>
                zmian technologii, przy wykorzystaniu której przetwarzamy dane
                osobowe,
              </li>
              <li>
                aktualnych wytycznych, w szczególności m.in. Prezesa Urzędu
                Ochrony Danych Osobowych,
              </li>
              <li>
                zmian sposobów, celów lub podstaw przetwarzania danych
                osobowych.
              </li>
            </ol>

            <div className="my-8 h-px w-full bg-slate-200" />

            <p>
              13.3. Zastrzegamy sobie prawo do zmiany Polityki Prywatności w
              każdym czasie, o czym poinformujemy Usługobiorców poprzez
              zamieszczenie informacji na stronie Serwisu.
            </p>

            <p>
              13.4. Zmiany w Polityce Prywatności wchodzą w życie w terminie
              określonym w ogłoszeniu, nie krótszym niż 7 dni od daty
              zamieszczenia.
            </p>
          </>
        ),
      },
      {
        id: "rozdzial-14",
        title: "XIV. Postanowienia końcowe",
        content: (
          <>
            <p>
              14.1. Serwis może zawierać odnośniki do innych stron
              internetowych. Zachęcamy, aby po przejściu na inne strony,
              zapoznać się z polityką prywatności tam ustaloną. Niniejsza
              Polityka Prywatności dotyczy tylko naszej strony pod adresem
              www.twojdoradcaoze.pl.
            </p>

            <p>
              14.2. Usługobiorca może uzyskać dostęp do Polityki Prywatności w
              każdym czasie za pośrednictwem odsyłacza zamieszczonego w Serwisie
              pod adresem www.twojdoradcaoze.pl oraz pobrać ją i sporządzić jej
              wydruk.
            </p>

            <p>
              14.3. Polityka Prywatności jest integralną częścią Regulaminu oraz
              Polityki Mediów Społecznościowych, które są dostępne w Serwisie
              pod adresem www.twojdoradcaoze.pl.
            </p>

            <p>
              14.4. W sprawach nieuregulowanych w Polityce Prywatności mają
              zastosowanie przepisy prawa powszechnie obowiązującego.
            </p>

            <p>
              14.5. Rozstrzyganie ewentualnych sporów rozstrzygnie sąd właściwy
              zgodnie z postanowieniami właściwych przepisów obowiązującego
              prawa.
            </p>

            <p>14.6. Polityka Prywatności obowiązuje od dnia 11.12.2025 r.</p>
          </>
        ),
      },
    ],
    []
  );
return (
    <LegalDocumentPage
      title="Polityka Prywatności"
      highlightedTitle="www.twojdoradcaoze.pl"
      description="Poniżej znajduje się aktualna polityka prywatności. Dokument określa zasady przetwarzania danych osobowych, zakres uprawnień użytkowników, politykę cookies oraz podstawowe zasady bezpieczeństwa danych w Serwisie."
      effectiveDate="11.12.2025 r."
      pdfHref="/polityka-prywatnosci.pdf"
      tocAriaLabel="Spis treści polityki prywatności"
      notice={
        <>
          <strong>Informacja:</strong> Politykę Prywatności należy czytać
          łącznie z Regulaminem oraz Polityką Mediów Społecznościowych, jeżeli
          zostały udostępnione w Serwisie.
        </>
      }
      sections={sections}
    />
  );
}
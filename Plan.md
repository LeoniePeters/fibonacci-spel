## Opdracht:

Maak een 50x50 grid. 

Als je klikt op een cel wordt bij alle cellen in de rij en kolom van de cel 1 opgeteld. Was een cel leeg dan wordt die op 1 gezet. 

Na elke verandering licht een cel kort geel op. 

Als 5 elkaar in de Fibonacci-reeks opvolgende getallen naast elkaar staan, lichten deze cellen kort groen op en worden ze leeg gemaakt. 

Gebruik de programmeertaal die je het beste vindt passen.


## Plan:

- Onderzoek hoe Fibonacci reeks werkt.
- Zet logica uiteen:
  - Wat moet er gebeuren bij meerdere klikken in verschillende cellen?
  - Welke rijen moeten er gecheckt worden op Fibonacci reeks? (Allemaal)
- Welke functies zijn nodig?
  - Functie elke cel in rij en kolom cel++ en geel
  - Functie fibonacci check
  - Functie cel = 0 en groen
- Welke tech? HTML, CSS, React of plain DOM manipulatie met JS?

1. Experimenteer in Vanilla JS
2. Met React state toch beter handelbaar, want
grid kan in state opgeslagen, bijgewerkt en afgelezen worden.
3. Maak React app:
    1. Voeg leeg grid toe aan state, render grid
    2. Luister naaar klik events, +1
    3. Voeg gele animatie toe
    4. Schrijf functie die nagaat of er een Fibonacci reeks van 5 voorkomt
    5. Schrijf tests voor Fibonacci functie
    6. Voeg groene animatie toe


  Verbeteringen:
  1. Schrijf Fibonacci functie anders zodat hij voor reeksen langer dan 5 en meerder reeksen per rij verwerkt
  2. Verbeter kleur animaties
  3. Voeg wat styling toe

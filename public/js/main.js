$("#calendar").fullCalendar({
    defaultView: "agendaWeek",
    allDaySlot: false,
    height: 'auto',
    eventDurationEditable: false,
    slotDuration: "00:30:00",
    slotLabelInterval: "01:00:00",
    slotLabelFormat: "HH",
    columnHeaderFormat: 'dddd',
    firstDay: 1,
    eventOverlap: false,
    selectOverlap: false,
    locale: "de",
    minTime: '08:00:00',
    maxTime: '22:00:00',
    events: events,
    viewRender: function () {
        const nodes = document.querySelectorAll("#calendar tbody tr:nth-child(2n) td:first-child");
        const nodes1 = document.querySelectorAll("#calendar tbody tr:nth-child(2n-1) td:first-child span");
        for (let i = 0; i < nodes.length; i++) {

            nodes[i].innerHTML = '<span class="small">30</span>';
        };
        for (let i = 0; i < nodes1.length; i++) {


            nodes1[i].innerHTML += "<span class='small'>00</span>";
        };
    }
});
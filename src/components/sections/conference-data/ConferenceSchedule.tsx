"use client";
export default function ConferenceSchedule() {
  return (
    <section className="py-20 from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
            Conference Schedule
          </h2>
          <p className="mt-4 text-gray-600">
            Follow our day step by step, from registration to closing session,
            in a clear and interactive flow.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line for desktop */}
          <div className="hidden sm:block absolute left-1/2 top-0 w-1 bg-sky-200 h-full -translate-x-1/2"></div>

          {[
            { time: "8:00 – 9:00 AM", title: "Registration & Breakfast" },
            { time: "9:00 – 10:00 AM", title: "Welcome & Keynote" },
            { time: "10:15 – 11:00 AM", title: "Breakout Session #1" },
            { time: "11:15 – 12:00 PM", title: "Breakout Session #2" },
            { time: "12:00 – 1:00 PM", title: "Lunch" },
            { time: "1:00 – 1:45 PM", title: "Breakout Session #3" },
            { time: "2:00 – 2:45 PM", title: "Breakout Session #4" },
            { time: "3:00 – 3:30 PM", title: "Closing Session" },
          ].map((step, i) => (
            <div
              key={i}
              className={`relative sm:flex sm:items-center ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } mb-12`}
            >
              {/* Connector line for mobile */}
              <div className="absolute sm:hidden left-6 top-0 h-full w-1 bg-sky-200"></div>

              {/* Step Circle */}
              <div className="flex items-center justify-center z-10 h-14 w-14 rounded-full bg-[#3dae30] text-white font-bold text-lg mx-auto sm:mx-0">
                {i + 1}
              </div>

              {/* Step Card */}
              <div className="mt-4 sm:mt-0 sm:w-1/2 bg-white rounded-2xl shadow-[0_5px_10px_rgba(61,174,48,0.35)] p-6 hover:shadow-lg transition mx-auto sm:mx-0">
                <p className="text-sm font-semibold text-sky-600">
                  {step.time}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const SessionCards = () => {
    const sessions = [
        { channel: 'Direct', traffic: 65.23, color: 'bg-blue-500' },
        { channel: 'Direct', traffic: 80.28, color: 'bg-green-500' },
        { channel: 'Direct', traffic: 50.28, color: 'bg-teal-500' },
    ];

    return (
        <>
        <div>
        <div className="max-w-lg mx-4 mt-4 bg-[#e9edf4] rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-3">
                <h2 className="text-lg font-semibold mb-2">Sessions By Device</h2>
                <div className="flex items-center justify-between pb-1 mb-2 border-b-2 border-white">
                    <span className="font-semibold text-gray-700">Channel</span>
                    <span className="font-semibold text-gray-700">Traffic (%)</span>
                    <span className="font-semibold text-gray-700">Percentage</span>
                </div>
                <div>
                    {sessions.map((session, index) => (
                        <div key={index} className="flex items-center justify-between py-1">
                            <span className="text-gray-700 text-sm">{session.channel}</span>
                            <div className="w-2/3 h-2 mx-4 rounded-full bg-white relative">
                                <div
                                    className={`absolute top-0 left-0 h-2 rounded-full ${session.color}`}
                                    style={{ width: `${session.traffic}%` }}
                                ></div>
                            </div>
                            <span className="text-gray-700 text-sm">{session.traffic}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default SessionCards;

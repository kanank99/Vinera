import React from 'react'
import { useState, useEffect } from 'react'

function SavingsCalc() {

    const [numEmployees, setNumEmployees] = useState(2)
    const [avgHourlyWage, setAvgHourlyWage] = useState(16)
    const [roiMonths, setRoiMonths] = useState(3)
    const [totalSavings, setTotalSavings] = useState(0)
    const [planChosen, setPlanChosen] = useState('Basic')
    const [planDuration, setPlanDuration] = useState('Monthly')
    const [vineraCost, setVineraCost] = useState(150)
    const [savingPercentage, setSavingPercentage] = useState(0)
    const [totalSavingsAmount, setTotalSavingsAmount] = useState(0)
    const [savingsPositive, setSavingsPositive] = useState(true)

    const calculateSavings = () => {
        // Assuming an 8-hour workday and 20 workdays per month
        const hoursPerMonth = 20 * 8;

        const savings = numEmployees * avgHourlyWage * hoursPerMonth * roiMonths;
        setTotalSavings(savings.toLocaleString('en-US', { maximumFractionDigits: 0, style: 'currency', currency: 'USD' }));

        const vineraPlanCost = planChosen === 'Basic' ? 1500 : planChosen === 'Standard' ? 3000 : 4500;

        const vineraTotalCost = vineraPlanCost * roiMonths;
        const quarterlySaving = 0.85 * vineraTotalCost;
        const finalVineraCost = planDuration === 'Monthly' ? vineraTotalCost : quarterlySaving;
        setVineraCost(finalVineraCost.toLocaleString('en-US', { maximumFractionDigits: 0, style: 'currency', currency: 'USD' }));
        setSavingPercentage(Math.round((savings / finalVineraCost) * 100));
        setTotalSavingsAmount(Math.round(savings - finalVineraCost).toLocaleString('en-US', { maximumFractionDigits: 0, style: 'currency', currency: 'USD' }));
        setSavingsPositive(savings > finalVineraCost);
    }

    useEffect(() => {
        calculateSavings();
    })

    return (
        <div className='bg-[#000212] font-display'>
            <hr className='border-[#27282B] w-[90%] max-w-[1200px] m-auto' />
            <div className='max-w-screen-xl m-auto py-20'>

                <p className='lg:text-left text-4xl tracking-tight max-w-[1100px] m-auto pb-8 font-extrabold text-gray-900 dark:text-white'>Savings Calculator</p>

                <div className='relative w-full flex flex-col p-6 mx-auto max-w-[1100px] text-center text-gray-900 savingsCard rounded-xl border border-gray-100 shadow dark:border-[#5e6ad2] xl:p-8 dark:text-white'>
                    <div class='savings-card-light-1 hidden lg:block'></div>
                    <div class='savings-card-light-2 hidden lg:block'></div>
                    <p className='text-4xl font-semibold md:text-left pb-6'>Your Employee Cost</p>
                    <div className='flex flex-col md:flex-row w-full'>
                        <div className='w-full flex flex-col gap-6'>
                            <div className='flex-col flex gap-2 justify-center items-center md:items-start'>
                                <p className='text-xl'>Number of Employees<span className='text-[#5e6ad2]'> *</span></p>
                                <input type="text" class="py-3 px-5 block w-[20rem] border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" value={numEmployees} onChange={(e) => {
                                    setNumEmployees(e.target.value);
                                    calculateSavings();
                                }}></input>
                            </div>
                            <div className='flex-col flex gap-2 justify-center items-center md:items-start'>
                                <p className='text-xl'>Average Hourly Wage<span className='text-[#5e6ad2]'> *</span></p>
                                <input type="text" class="py-3 px-5 block w-[20rem] border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" value={avgHourlyWage} onChange={(e) => {
                                    setAvgHourlyWage(e.target.value);
                                    calculateSavings();
                                }}></input>
                            </div>
                            <div className='flex-col flex gap-2 justify-center items-center md:items-start'>
                                <p className='text-xl'>Months of Labor<span className='text-[#5e6ad2]'> *</span></p>
                                <input type="text" class="py-3 px-5 block w-[20rem] border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" value={roiMonths} onChange={(e) => {
                                    setRoiMonths(e.target.value);
                                    calculateSavings();
                                }
                                }></input>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='flex flex-col gap-6 justify-center items-center md:items-start'>
                                <p className='pt-10 md:pt-0 text-3xl font-semibold'>Summary</p>
                                <table className='calcTable table-fixed w-full'>
                                    <th className='text-left text-lg font-semibold'>Name</th>
                                    <th className='text-right text-lg font-semibold'>Composition</th>
                                    <th className='text-right text-lg font-semibold'>Total</th>

                                    <tr className='border-t-[1px] border-[#5e6ad2]' >
                                        <td className='text-left text-md font-light'>Number of Employees</td>
                                        <td className='text-right text-md'>1 x {numEmployees}</td>
                                        <td className='text-right text-md'>{numEmployees}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-left text-md font-light'>Average Hourly Wage</td>
                                        <td className='text-right text-md'>1 x {avgHourlyWage}</td>
                                        <td className='text-right text-md'>{avgHourlyWage}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-left text-md font-light'>Months of Labor</td>
                                        <td className='text-right text-md'></td>
                                        <td className='text-right text-md'>{roiMonths}</td>
                                    </tr>
                                    <tr className='border-t-[1px] border-b-[1px] border-[#5e6ad2]'>
                                        <td className='text-left text-xl font-semibold'>Employee Cost</td>
                                        <td className='text-right text-lg'></td>
                                        <td className='text-right text-xl font-semibold'>{totalSavings}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <p className='text-3xl md:text-4xl font-semibold md:text-left pt-6 pb-6 md:pb-0'>Savings With Vinera</p>
                    <nav class="relative z-0 flex border rounded-full overflow-hidden dark:border-gray-700 mt-10">
                        {planChosen === 'Basic' ?
                            <div class="group relative min-w-0 flex-1 bg-white py-4 px-4 border-b-2 border-b-[#515fe0] text-gray-900 text-sm font-medium text-center overflow-hidden focus:z-10 dark:bg-gray-800 dark:text-gray-300" aria-current="page">
                                Basic
                            </div>
                            :
                            <div class="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-400" onClick={() => {
                                setPlanChosen('Basic');
                                calculateSavings();
                            }}>
                                Basic
                            </div>
                        }
                        {planChosen === 'Standard' ?
                            <div class="group relative min-w-0 flex-1 bg-white py-4 px-4 border-b-2 border-b-[#515fe0] text-gray-900 text-sm font-medium text-center overflow-hidden focus:z-10 dark:bg-gray-800 dark:text-gray-300" aria-current="page">
                                Standard
                            </div>
                            :
                            <div class="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-400" onClick={() => {
                                setPlanChosen('Standard');
                                calculateSavings();
                            }}>
                                Standard
                            </div>
                        }
                        {planChosen === 'Pro' ?
                            <div class="group relative min-w-0 flex-1 bg-white py-4 px-4 border-b-2 border-b-[#515fe0] text-gray-900 text-sm font-medium text-center overflow-hidden focus:z-10 dark:bg-gray-800 dark:text-gray-300" aria-current="page">
                                Pro
                            </div>
                            :
                            <div class="group relative min-w-0 flex-1 bg-white py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-400" onClick={() => {
                                setPlanChosen('Pro');
                                calculateSavings();
                            }}>
                                Pro
                            </div>
                        }
                    </nav>
                    <div class="mt-7">
                        <div class="flex justify-center items-center">
                            <label class={`min-w-[3.5rem] text-md mr-3 ${planDuration === 'Monthly' ? 'text-gray-400' : 'text-[#f7f7f7]'} transition`}>Monthly</label>

                            <input type="checkbox" id="hs-basic-with-description" class="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#5e6ad2] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-transparent focus:border-[#5e6ad2]  focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-[#5e6ad2] dark:focus:ring-offset-gray-800

    before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"  onChange={() => {
                                    if (planDuration === 'Monthly') {
                                        setPlanDuration('Quarterly');
                                    }
                                    else {
                                        setPlanDuration('Monthly');
                                    }
                                    calculateSavings();
                                }
                                } />

                            <label class={`relative min-w-[3.5rem] text-md ml-3 ${planDuration === 'Quarterly' ? 'text-[#f7f7f7]' : 'text-gray-400'} transition`}>
                                Quarterly
                            </label>
                        </div>
                    </div>
                    {/* <!-- Card Section --> */}
                    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 mx-auto">
                        {/* <!-- Grid --> */}
                        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {/* <!-- Card --> */}
                            <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-8 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                                <div class="inline-flex justify-center items-center">
                                    <span class="w-2 h-2 inline-block bg-gray-500 rounded-full mr-2"></span>
                                    <span class="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">Employee Costs</span>
                                </div>

                                <div class="text-center">
                                    <h3 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
                                        {totalSavings}
                                    </h3>
                                </div>


                            </div>
                            {/* <!-- End Card --> */}
                            {/* <!-- Card --> */}
                            <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-8 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                                <div class="inline-flex justify-center items-center">
                                    <span class="w-2 h-2 inline-block bg-[#5e6ad2] rounded-full mr-2"></span>
                                    <span class="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">Vinera Costs</span>
                                </div>

                                <div class="text-center">
                                    <h3 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
                                        {vineraCost}
                                    </h3>
                                </div>


                            </div>
                            {/* <!-- End Card --> */}

                            {/* <!-- Card --> */}
                            <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-8 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                                <div class="inline-flex justify-center items-center">
                                    <span class={`w-2 h-2 inline-block ${savingsPositive ? 'bg-green-600' : 'bg-red-500'} rounded-full mr-2`}></span>
                                    <span class="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">Savings Percentage</span>
                                </div>

                                <div class="text-center">
                                    <h3 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
                                        {savingPercentage}%
                                    </h3>
                                </div>

                            </div>
                            {/* <!-- End Card --> */}

                            {/* <!-- Card --> */}
                            <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-8 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
                                <div class="inline-flex justify-center items-center">
                                    <span class={`w-2 h-2 inline-block ${savingsPositive ? 'bg-green-600' : 'bg-red-500'} rounded-full mr-2`}></span>
                                    <span class="text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">Total Savings</span>
                                </div>

                                <div class="text-center">
                                    <h3 class="translate-y-4 sm:translate-x-0 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
                                        {totalSavingsAmount}
                                    </h3>
                                </div>

                            </div>
                            {/* <!-- End Card --> */}
                        </div>
                        {/* <!-- End Grid --> */}
                    </div>
                    {/* <!-- End Card Section --> */}
                </div>
            </div >
        </div >
    )
}

export default SavingsCalc
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const { data: products } = useFetch('/products?limit=5')
  const { data: Sproducts } = useFetch('/products?limit=5&skip=10')

  const data = {
    labels: products?.data?.products?.map(el => el.title),
    datasets: [
      {
        label: 'Count',
        data: products?.data?.products?.map(el => el.stock),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: Sproducts?.data?.products?.map(el => el.title),
    datasets: [
      {
        label: 'Stock',
        data: Sproducts?.data?.products?.map(el => el.stock),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <section className='charts-section'>
      <div className="container">
        <div className="charts-section__content">
          <h1>Count</h1>
          <Pie data={data} />
        </div>
        <div className="charts-section__content">
          <h1>Stock</h1>
          <Pie data={data2} />
        </div>
      </div>
    </section>
  )
}

export default Charts
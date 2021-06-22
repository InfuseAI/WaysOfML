import Head from "next/head";
import data from "./out.json";
import stages from "./stages.json";
import Quote from "./quote";
import Divider from "./divider";

export default function Home() {
  let total =
    data.filter((x) => x[stages[0]] !== "").length *
    data.filter((x) => x[stages[1]] !== "").length *
    data.filter((x) => x[stages[2]] !== "").length *
    data.filter((x) => x[stages[3]] !== "").length *
    data.filter((x) => x[stages[4]] !== "").length;
  const circles = {
    "Highly Developed": <span style={{ color: "#8700FF" }}>⬤</span>,
    "Moderately Developed": <span style={{ color: "#D65CFF" }}>⬤</span>,
    "Still Developing": <span style={{ color: "#F8D3FE" }}>⬤</span>,
    "Lightly Developed": <span style={{ color: "#E0E5EB" }}>⬤</span>,
  };

  console.log(data[0], stages[1], data[0][stages[0]])

  return (
    <div>
      <Head>
        <title>{total} Ways of doing ML</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://waysof.ml" />
        <meta property="og:title" content="Ways of ML" />
        <meta property="og:image" content="https://waysofml.vercel.app/og2.png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="819" />
        <meta property="og:type" content="article"/>
        <meta property="og:description" content="Powered by InfuseAI" />
      </Head>

      <main
        className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center"
        style={{ height: "80vh" }}
      >
        <h1
          className="max-w-6xl font-extrabold text-7xl md:text-9xl"
          style={{ letterSpacing: "-.03em" }}
        >
          There're currently <span className="text-blue-500 ">{total}</span> ways
          of doing ML
        </h1>
      </main>

      <article className="max-w-5xl mx-4 sm:mx-auto">
        <h2 className="text-2xl font-bold">Machine Learning Lifecycle</h2>

        <ul className="my-4">
          <li className="block mr-4 sm:inline-block">
            <span style={{ color: "#8700FF" }}>⬤</span> Highly Developed
          </li>
          <li className="block mr-4 sm:inline-block">
            <span style={{ color: "#D65CFF" }}>⬤</span> Moderately Developed
          </li>
          <li className="block mr-4 sm:inline-block">
            <span style={{ color: "#F8D3FE" }}>⬤</span> Still Developing
          </li>
          <li className="block sm:inline-block">
            <span style={{ color: "#E0E5EB" }}>⬤</span> Lightly Developed
          </li>
        </ul>

        <ul className="my-4 text-sm text-right text-gray-500 sm:hidden">
          <li className="block">0. Resource Management, DL Enablement</li>
          <li className="block">1. Data Gathering, Transformation</li>
          <li className="block">
            2. Experimenting, Training, Tuning, Testing
          </li>
          <li className="block">
            3. Productionization, Deployment, Inference
          </li>
          <li className="block">
            4. Monitoring, Auditing, Management, Retraining
          </li>
        </ul>

        <table className="mt-12 table-fixed">
          <thead>
            <tr className="text-normal">
              <th className="w-1/6 text-left"></th>
              <th className="w-1/6">
                <span className="hidden sm:block">
                  0. Resource Management, DL Enablement
                </span>
                <span className="block sm:hidden">0.</span>
              </th>
              <th className="w-1/6">
                <span className="hidden sm:block">
                  1. Data Gathering, Transformation
                </span>
                <span className="block sm:hidden">1.</span>
              </th>
              <th className="w-1/6">
                <span className="hidden sm:block">
                  2. Experimenting, Training, Tuning, Testing
                </span>
                <span className="block sm:hidden">2.</span>
              </th>
              <th className="w-1/6">
                <span className="hidden sm:block">
                  3. Productionization, Deployment, Inference
                </span>
                <span className="block sm:hidden">3.</span>
              </th>
              <th className="w-1/6">
                <span className="hidden sm:block">
                  4. Monitoring, Auditing, Management, Retraining
                </span>
                <span className="block sm:hidden">4.</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((x, i) => {
              return (
                <tr key={i} className="text-center border-b border-gray-200">
                  <td className="py-4">
                    <a
                      className="underline hover:text-blue-400"
                      href={x.Website}
                    >
                      {x.Name}
                    </a>
                  </td>
                  <td>
                    {
                      circles[
                        x[stages[0]]
                      ]
                    }
                  </td>
                  <td>
                    {
                      circles[
                        x[stages[1]]
                      ]
                    }
                  </td>
                  <td>
                    {
                      circles[
                        x[
                          stages[2]
                        ]
                      ]
                    }
                  </td>
                  <td>
                    {
                      circles[
                        x[
                          stages[3]
                        ]
                      ]
                    }
                  </td>
                  <td>
                    {
                      circles[
                        x[
                          stages[4]
                        ]
                      ]
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>

      <Quote className="mx-4 sm:mx-auto" />

      <Divider />

      <article className="max-w-4xl mx-4 text-center sm:mx-auto">
        <h3 className="text-xl font-bold">
          <a
            className="hover:underline hover:text-blue-400"
            href="https://towardsdatascience.com/rise-of-the-canonical-stack-in-machine-learning-724e7d2faa75"
          >
            Rise of the Canonical Stack in Machine Learning
          </a>
        </h3>
        <div className="text-gray-500">
          How a Dominant New Software Stack Will Unlock the Next Generation of
          Cutting Edge AI Apps
        </div>

        <h3 className="mt-24 text-xl font-bold text-blue-500">
          <a
            className="hover:underline hover:text-blue-400"
            href="mailto:poga@infuseai.io"
          >
            Share your MLOps tools with us!
          </a>
        </h3>
      </article>

      <Divider />

      <footer className="flex items-center justify-center w-full h-24 mt-24">
        <a
          className="flex items-center justify-center"
          href="https://infuseai.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="block w-24">Powered by{" "}</span>
          <img src="logo.svg" alt="InfuseAI Logo" className="h-6 ml-2" />
        </a>
      </footer>
    </div>
  );
}

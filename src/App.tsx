import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Form from "./components/Organisms/Form";
import Reviews from "./components/Organisms/Reviews";
import Graph from "./components/Organisms/Graph";
import { ReviewContext } from "./context/reviewContext";

function App() {
  const [reviewData, setReviewData] = useState({});

  return (
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-3xl my-6">Customer Feedback Page</h1>

        <ReviewContext.Provider value={{ reviewData, setReviewData }}>
          <div className="grid grid-cols-2 gap-4">
            <Form />

            <ErrorBoundary fallback={<p className="text-2xl text-center">No data available, please check your Api connection.</p>}>
              <Suspense fallback={<p className="text-1xl text-center">Loading...</p>}>
                <Graph />
              </Suspense>
            </ErrorBoundary>

              <ErrorBoundary fallback={<p className="text-2xl text-center col-span-2">No data available, please check your Api connection.</p>}>
                <Suspense fallback={<p className="text-1xl text-center col-span-2">Loading...</p>}>
                  <Reviews />
                </Suspense>
              </ErrorBoundary>
          </div>
        </ReviewContext.Provider>
      </div>
  );
}

export default App;

import React from "react";

const ErrorPage = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-700">請確認網址是否正確，或返回首頁。</p>
    </div>
  );
};

export default ErrorPage;
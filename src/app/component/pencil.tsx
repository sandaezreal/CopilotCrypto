"use client";

export default function Pencil({className} : {className:any}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="none"
        className={className}
      >
        <path
          d="M23.2529 2.92025L21.0781 0.745258C20.0844 -0.248443 18.4677 -0.248396 17.474 0.745258C16.5384 1.68093 2.2483 15.9721 1.29332 16.9271C1.1916 17.0289 1.12345 17.164 1.09917 17.2963L0.0117616 23.1688C-0.0303789 23.3964 0.0421834 23.6303 0.205917 23.794C0.369839 23.9579 0.603745 24.0304 0.831135 23.9882L6.70311 22.9007C6.83881 22.8754 6.97222 22.8066 7.07225 22.7065L23.2529 6.52461C24.2489 5.52861 24.249 3.91639 23.2529 2.92025ZM1.58066 22.4191L2.23846 18.8668L5.1328 21.7613L1.58066 22.4191ZM6.57509 21.2149L2.78483 17.4244L16.6228 3.58536L20.413 7.3759L6.57509 21.2149ZM22.2585 5.53025L21.4073 6.38154L17.6171 2.591L18.4683 1.73971C18.9136 1.2943 19.6383 1.29426 20.0837 1.73971L22.2585 3.91471C22.705 4.36119 22.705 5.08372 22.2585 5.53025Z"
          fill="currentColor"
        />
      </svg>
    );
  }
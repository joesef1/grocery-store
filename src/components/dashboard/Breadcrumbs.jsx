
import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const userNamesById = { 1: "John" };

const DynamicUserBreadcrumb = ({ match }) => (
  <span>{userNamesById[match.params.userId]}</span>
);

const CustomPropsBreadcrumb = ({ someProp }) => <span>{someProp}</span>;

const routes = [
  { path: "/users/:userId", breadcrumb: DynamicUserBreadcrumb },
  { path: "/example", breadcrumb: "Custom Example" },
  {
    path: "/custom-props",
    breadcrumb: CustomPropsBreadcrumb,
    props: { someProp: "Hi" },
  },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);


  return (
    <div className="py-3 lg:w-[93%]   mx-auto  lg:mr-9">
    {breadcrumbs.map(({ match, breadcrumb }, index) => (
      <React.Fragment key={match.pathname}>
        {index > 0 && (
          <span className="text-gray-500 mx-2">/</span>
        )}{" "}
        {/* Insert a space and slash after the first breadcrumb */}
        {index === breadcrumbs.length - 1 ? (
          <span className="text-blue-500">{breadcrumb}</span>
        ) : (
          <NavLink to={match.pathname} className="text-gray-500 hover:underline">
            {breadcrumb}
          </NavLink>
        )}
      </React.Fragment>
    ))}
  </div>
  );
};

export default Breadcrumbs;


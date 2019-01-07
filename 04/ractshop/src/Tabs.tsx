import React, { Component } from 'react';

interface ITabsContext {
   activeName?: string;
   handleTabClick?: (name: string, content: React.ReactNode) => void;
}

const TabsContext = React.createContext<ITabsContext>({});

interface IState {
   activeName: string;
   activeContent: React.ReactNode;
}

interface ITabProps {
   name: string;
   initialActive?: boolean;
   heading: () => string | JSX.Element;
}

class Tabs extends Component<{}, IState> {
   public static Tab: React.SFC<ITabProps> = ({
      initialActive,
      name,
      heading,
      children
   }) => (
      <TabsContext.Consumer>
         {(context: ITabsContext) => {
            if (!context.activeName && initialActive) {
               if (context.handleTabClick) {
                  context.handleTabClick(name, children);

                  return null;
               }
            }

            const activeName = context.activeName
               ? context.activeName
               : initialActive
               ? name
               : '';
            const handleTabClick = (e: React.MouseEvent<HTMLLIElement>) => {
               if (context.handleTabClick) {
                  context.handleTabClick(name, children);
               }
            };

            return (
               <li
                  onClick={handleTabClick}
                  className={name === activeName ? 'active' : ''}
               >
                  {heading()}
               </li>
            );
         }}
      </TabsContext.Consumer>
   );

   public render() {
      const { children } = this.props;

      return (
         <TabsContext.Provider
            value={{
               activeName: this.state ? this.state.activeName : '',
               handleTabClick: this.handleTabClick
            }}
         >
            <ul className="tabs">{children}</ul>
            <div>{this.state && this.state.activeContent}</div>
         </TabsContext.Provider>
      );
   }

   private handleTabClick = (name: string, content: React.ReactNode) => {
      this.setState({ activeName: name, activeContent: content });
   };
}

export default Tabs;

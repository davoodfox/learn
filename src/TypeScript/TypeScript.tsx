import React, { ReactElement, ReactNode, useState } from "react";

// Conventional props
function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

function HeadingWithContent({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <h1>{children}</h1>;
}

// Default props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};

type ContainerProps = {
  children: ReactNode;
} & typeof defaultContainerProps;

function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}

Container.defaultProps = defaultContainerProps;

// Functional props
function TextWithNumber({
  header,
  children,
}: {
  header?: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) {
  const [state, setState] = useState(1);

  return (
    <div>
      {header && <div>{header?.(state)}</div>}
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState(state + 1)}>Add</button>
      </div>
    </div>
  );
}

// List
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

// Class component
class MyHeading extends React.Component<{
  title: ReactNode;
}> {
  render(): React.ReactNode {
    return <h1>{this.props.title}</h1>;
  }
}

interface Props {}

function TypeScript(props: Props) {
  const {} = props;

  return (
    <>
      <Heading title="Hello" />
      <HeadingWithContent>Hi</HeadingWithContent>
      <Container>Foo</Container>
      <TextWithNumber header={(num: number) => <h2>Header {num}</h2>}>
        {(num: number) => <div>Today's number is {num}</div>}
      </TextWithNumber>
      <List
        items={["Jack", "Sadie", "oso"]}
        render={(item: string) => <div>{item.toLowerCase()}</div>}
      />
      <MyHeading title={<h1>There yah go!</h1>} />
    </>
  );
}

export default TypeScript;

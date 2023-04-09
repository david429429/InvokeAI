import {
  Background,
  Controls,
  MiniMap,
  OnConnect,
  OnEdgesChange,
  OnNodesChange,
  ReactFlow,
  ConnectionLineType,
  OnConnectStart,
  OnConnectEnd,
} from 'reactflow';
import { useAppDispatch, useAppSelector } from 'app/storeHooks';
import { RootState } from 'app/store';
import {
  connectionEnded,
  connectionMade,
  connectionStarted,
  edgesChanged,
  nodesChanged,
} from '../store/nodesSlice';
import { useCallback } from 'react';
import { InvocationComponent } from './InvocationComponent';

const nodeTypes = { invocation: InvocationComponent };

export const Flow = () => {
  const dispatch = useAppDispatch();
  const nodes = useAppSelector((state: RootState) => state.nodes.nodes);
  const edges = useAppSelector((state: RootState) => state.nodes.edges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => {
      dispatch(nodesChanged(changes));
    },
    [dispatch]
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => {
      dispatch(edgesChanged(changes));
    },
    [dispatch]
  );

  const onConnectStart: OnConnectStart = useCallback(
    (event, params) => {
      dispatch(connectionStarted(params));
    },
    [dispatch]
  );

  const onConnect: OnConnect = useCallback(
    (connection) => {
      dispatch(connectionMade(connection));
    },
    [dispatch]
  );

  const onConnectEnd: OnConnectEnd = useCallback(
    (event) => {
      dispatch(connectionEnded());
    },
    [dispatch]
  );

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnectStart={onConnectStart}
      onConnect={onConnect}
      onConnectEnd={onConnectEnd}
      connectionLineType={ConnectionLineType.SmoothStep}
      defaultEdgeOptions={{
        type: 'smoothstep',
        style: { strokeWidth: 2 },
      }}
    >
      <Background />
      <Controls />
      <MiniMap nodeStrokeWidth={3} zoomable pannable />
    </ReactFlow>
  );
};

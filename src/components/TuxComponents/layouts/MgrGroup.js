import React, { useState } from 'react';
import styled from 'styled-components';
import CreateGroup from '../../components/CreateGroup/CreateGroup';
import ModifyGroup from '../ModifyGroup/ModifyGroup';
import { Flex, tux_blue, Poppins } from '../utilities';

const ManageGroupMembers = ({
  groups,
  selectedGroupIndex,
  textInput,
  handleTextInputChange,
  handleAddToGroup,
  newGroupName,
  setNewGroupName,
  handleCreateGroup,
  setSelectedGroupIndex,
}) => {
  const [createGroup, setCreateGroup] = useState(false);
  return (
    <OutisdeFlex>
      <ColorBlock></ColorBlock>
      <div style={{ margin: `20px 20px 80px 40px` }}>
        <Heading3>Manage Group Members</Heading3>

        {!groups.length > 0 && (
          <CreateGroup
            newGroupName={newGroupName}
            setNewGroupName={setNewGroupName}
            handleCreateGroup={handleCreateGroup}
            setCreateGroup={setCreateGroup}
          />
        )}
        {createGroup && (
          <CreateGroup
            newGroupName={newGroupName}
            setNewGroupName={setNewGroupName}
            handleCreateGroup={handleCreateGroup}
            setCreateGroup={setCreateGroup}
            createGroup={createGroup}
          />
        )}
        {groups.length > 0 && createGroup === false && (
          <ModifyGroup
            selectedGroupIndex={selectedGroupIndex}
            setSelectedGroupIndex={setSelectedGroupIndex}
            groups={groups}
            handleAddToGroup={handleAddToGroup}
            createGroup={createGroup}
            setCreateGroup={setCreateGroup}
            textInput={textInput}
            handleTextInputChange={handleTextInputChange}
          />
        )}
      </div>
    </OutisdeFlex>
  );
};

export default ManageGroupMembers;


const OutisdeFlex = styled.article`
    ${Flex({jc:'center',ai:'center'})};
    max-width: 1440px;
`;

const ColorBlock = styled.div`
    height: 10px;
    background: ${tux_blue};
    width: 100%;
`;

const Heading3 = styled.h3`
    font: ${Poppins};
    font-weight: 600;
    line-height: 36px;
`;
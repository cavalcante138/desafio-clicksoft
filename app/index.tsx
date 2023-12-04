import { StatusBar } from 'expo-status-bar';
import { FlatList, ListRenderItemInfo, Alert } from 'react-native';
import Header from '../components/Header';
import { Body, Container, PostContainer } from './index-styled';
import { router } from 'expo-router';
import CreatePostButton from '../components/CreatePostButton';
import PostBox from '../components/PostBox';
import Toast from 'react-native-toast-message';
import useApi, { Post } from '../hooks/useApi';
import { useState } from 'react';
import { generateRandomNumber } from '../utils/generateRandomNumber';
import Input from '../components/Input';
import Button from '../components/Button';
import CloseButton from '../components/CloseButton';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import Loading from '../components/Loading';
import { NoResultsFoundText } from './user-styled';



export default function Home() {

  const { posts, deletePost, createPost, editPost, loading } = useApi();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState<string | null>(null);
  const [postId, setPostId] = useState<string | null>(null);
  const [postOpen, setPostOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const onPost = async () => {

    if (!title || !author || !body) return Alert.alert('Por favor preencha todos os campos');
    try {
      const randomId = generateRandomNumber().toString();
      await createPost({
        title,
        body,
        userId: randomId,
        user: {
          id: randomId,
          name: author
        }
      });
      setTitle('');
      setAuthor('');
      setBody('');
      setUserId(null);

      setPostOpen(false)

    } catch (err) {
      console.log(err);
    }

  }

  const onEdit = async () => {

    if (!title || !author || !body) return Alert.alert('Por favor preencha todos os campos');
    try {
      await editPost({
        id: postId!,
        title,
        body,
        userId: userId!,
        user: {
          id: userId ? userId : generateRandomNumber().toString(),
          name: author
        }
      });
      setTitle('');
      setAuthor('');
      setBody('');
      setUserId(null);
      setEditMode(false);

      setPostOpen(false);

    } catch (err) {
      console.log(err);
    }
  }

  const onDelete = (id: string) => {
    Alert.alert(
      "Deletar post",
      "Você tem certeza que quer deletar este post?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Deletar", onPress: async () => {
            try {
              await deletePost(id);
              Toast.show({
                type: 'success',
                text1: 'Post deletado com sucesso!',
                text2: 'Esse post foi deletado com sucesso!'
              })
            } catch (err) {
              Toast.show({
                type: 'error',
                text1: 'Erro ao deletar post!',
                text2: 'Ocorreu um erro ao deletar o post, tente novamente mais tarde!'
              })
            }
          }
        }
      ]
    );
  }

  return (
    <Container>
      <StatusBar style={'dark'} />
      {!postOpen ?
        <>
          <Header />
          <Body>
            {loading ? <Loading /> : 
            <FlatList
             ListEmptyComponent={
              <NoResultsFoundText>0 results</NoResultsFoundText>
            }
              data={posts}
              renderItem={({ item }: ListRenderItemInfo<Post>) => <PostBox
                onPress={() => {
                  router.push({ pathname: `/view-post`, params: { post: item.title, description: item.body, userId: item.user.id, name: item.user.name } });
                }}
                title={item.title} description={item.body}
                onDeletePress={() => {
                  onDelete(item.id);
                }}
                username={item.user.name}
                onEditPress={() => {
                  setPostOpen(true)
                  setEditMode(true)
                  setTitle(item.title)
                  setAuthor(item.user.name)
                  setBody(item.body)
                  setUserId(item.user.id)
                  setPostId(item.id)
                }
                }
                onUserPress={() => {
                  router.push({ pathname: `/user`, params: { userId: item.user.id, name: item.user.name } });
                }} />}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />}

            <CreatePostButton onPress={() => setPostOpen(true)} />
          </Body>
        </> : 
        <PostContainer
        entering={FadeIn}
        exiting={FadeOut}
        >
        <Body>
          <CloseButton onPress={() => {
            setPostOpen(false)
            setAuthor('')
            setBody('')
            setTitle('')
            setUserId(null)
            setEditMode(false)

          }} />
          <Input
            label='Título' onChange={setTitle} value={title}
          />
          <Input
            label='Autor' onChange={setAuthor} value={author}
          />
          <Input
            label='Postagem' onChange={setBody} value={body}
          />
          <Button label={editMode ? 'Editar' : 'Post'} onPress={editMode ? onEdit : onPost} />
        </Body>
        </PostContainer>
      }
    </Container>
  );
}

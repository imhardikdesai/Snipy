import { db } from "@/firebase/firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

interface FolderData {
  id: string;
}
export type HandleSetTechStackData = {
  user: any;
  data: { name: string; icon: string; id: string };
  isEdit: boolean;
};

export const handleSetTechStack = async (
  data: HandleSetTechStackData
): Promise<void> => {
  const { user, data: postData, isEdit } = data;
  try {
    if (!user) {
      console.error("User not authenticated");
      return;
    }
    const userDocRef = doc(db, "posts", user.uid);
    const techStackHtmlDocRef = doc(userDocRef, "TechStack", postData.id);

    if (isEdit) {
      const techStackHtmlDocSnapshot = await getDoc(techStackHtmlDocRef);

      if (techStackHtmlDocSnapshot.exists()) {
        await updateDoc(techStackHtmlDocRef, {
          ...postData,
        });
        toast.success("Tech Stack Updated Successfully");
      } else {
        console.error("Tech Stack not found for editing");
        toast.error("Tech Stack Edit Failed");
      }
    } else {
      await setDoc(techStackHtmlDocRef, {
        ...postData,
      });
      toast.success("Tech Stack Created Successfully");
    }
  } catch (error) {
    console.error("Error setting data:", error);
    toast.error("Tech Stack Operation Failed");
  }
};

export const handleSetFolderInsideTechStack = async (
  user: any,
  data: {
    name: string;
    id: string;
    for: string;
  },
  isEdit: boolean,
  isDelete: boolean = false
) => {
  try {
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    const userDocRef = doc(db, "posts", user.uid);
    const techStackHtmlDocRef = doc(userDocRef, "TechStack", data?.for);
    const folderCollectionRef = collection(techStackHtmlDocRef, "Folder");
    const folderDocRef = doc(folderCollectionRef, data?.id);

    if (isEdit && !isDelete) {
      // For edit operation, first get the existing data
      const existingFolderDoc = await getDoc(folderDocRef);

      if (existingFolderDoc.exists()) {
        await setDoc(folderDocRef, {
          ...existingFolderDoc.data(),
          name: data?.name,
        });
      } else {
        console.error("Document not found for editing");
      }
    } else if (!isEdit && !isDelete) {
      // For new folder creation
      await setDoc(folderDocRef, {
        name: data?.name,
      });
    } else if (isDelete) {
      // For deleting the folder
      await deleteDoc(folderDocRef);
      console.log("Folder deleted successfully");
    }

    console.log("Data set successfully");
  } catch (error) {
    console.error("Error setting/deleting data:", error);
  }
};

export const handleSetPostDataInsideFolder = async (user: any) => {
  const newPost = {
    id: "195326989659",
    title: "Post title",
    content: "Post content",
  };
  try {
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    const userDocRef = doc(db, "posts", user.uid);
    const techStackHtmlDocRef = doc(userDocRef, "TechStack", "HTML");

    // Reference to the "Folder" sub-collection inside the "HTML" document
    const folderCollectionRef = collection(techStackHtmlDocRef, "Folder");

    const authFolderDocRef = doc(folderCollectionRef, "Db");

    // Get the existing data from the document
    const authFolderDocSnapshot = await getDoc(authFolderDocRef);

    if (authFolderDocSnapshot.exists()) {
      const existingPosts = authFolderDocSnapshot.data()?.posts || [];

      // Check if the post with the same ID already exists
      const existingPostIndex = existingPosts.findIndex(
        (post: any) => post.id === newPost.id
      );

      if (existingPostIndex !== -1) {
        existingPosts[existingPostIndex] = newPost;
      } else {
        existingPosts.push(newPost);
      }
      await updateDoc(authFolderDocRef, {
        posts: existingPosts,
      });
    } else {
      // Document doesn't exist, create a new document with the specified data
      await setDoc(authFolderDocRef, {
        posts: [newPost],
      });
    }

    console.log("Data set successfully");
  } catch (error) {
    console.error("Error setting data:", error);
  }
};
export const fetchTechStack = async (user: any) => {
  try {
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    const techStackCollectionRef = collection(
      db,
      `posts/${user?.uid}/TechStack`
    );

    const snapshot = await getDocs(techStackCollectionRef);
    const techStackList: {
      id: string;
      icon: string;
      name: string;
    }[] = [];

    for (const doc of snapshot.docs) {
      const techStackData = { id: doc.id, ...doc.data() };
      techStackList.push(techStackData as any);
    }

    return techStackList;
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
};

export const fetchFoldersInsideTechStack = async (
  user: any,
  techStack: string
): Promise<FolderData[]> => {
  try {
    if (!user) {
      console.error("User not authenticated");
      return [];
    }

    const userDocRef = doc(db, "posts", user.uid);
    const techStackHtmlDocRef = doc(userDocRef, "TechStack", techStack);
    const folderCollectionRef = collection(techStackHtmlDocRef, "Folder");

    const folderQuerySnapshot = await getDocs(folderCollectionRef);

    const folderData: FolderData[] = [];

    folderQuerySnapshot.forEach((doc) => {
      const folderInfo: FolderData = { id: doc.id, ...doc.data() };
      folderData.push(folderInfo);
    });
    return folderData;
  } catch (error) {
    console.error("Error retrieving folder data:", error);
    return [];
  }
};

class TrieNode {
public:

    TrieNode* children[26];

    bool isLeaf;

    TrieNode() {
      
        isLeaf = false;
        for (int i = 0; i < 26; i++) {
            children[i] = nullptr;
        }
    }
};
class WordDictionary {
public:
    TrieNode* root;
    WordDictionary() {
        root = new TrieNode();
    }
    
    void addWord(string word) {
        TrieNode* curr=root;
        int n=word.size();
        for(int i=0;i<n-1;i++){
            int idx=word[i]-'a';
            if(curr->children[idx] == nullptr){
                TrieNode* next=new TrieNode();
                curr->children[idx]=next;
                curr=next;    
            }else{
                curr=curr->children[idx];
            }
        }
        int l=word[n-1]-'a';
        if(curr->children[l] == nullptr){
            TrieNode* next=new TrieNode();
            curr->children[l]=next;
            curr=next;
        }else{
            curr=curr->children[l];
        }
        curr->isLeaf=true;
    }
    
    bool search(string word) {
        return search(word,0,root);
    }

    bool search(string word,int startIdx, TrieNode* node) {
        int n=word.size();
        TrieNode* curr=node;
        for(int i=startIdx;i<n;i++){
            if(word[i]=='.'){
                for(int j=0;j<26;j++){
                    if(curr->children[j]!=nullptr && search(word,i+1,curr->children[j])){
                        return true;
                    }
                }
                return false;
            }else{
                int idx=word[i]-'a';
                if(curr->children[idx]==nullptr){
                    return false;
                }
                curr=curr->children[idx];
            }
        }

        return curr->isLeaf;
    }
};

